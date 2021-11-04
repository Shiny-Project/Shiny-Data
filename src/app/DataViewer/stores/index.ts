import { types, flow } from "mobx-state-tree";
import { Instance } from "mobx-state-tree";
import { message } from "antd";
import DataViewerService from "../service";
import { WeatherMeasurements } from "../types";
import BinaryDataTypes from "../../../proto";
import FormStore from "./modules/form";

const DataViewerStore = types
    .model({
        weatherData: types.frozen<
            Partial<BinaryDataTypes.HistoryWeatherDataResponse>
        >({}),
        form: FormStore,
        loading: false,
        isMenuDrawerVisible: false,
    })
    .actions((self) => ({
        getHistoricalWeatherData: flow(function* (
            startTime: Date,
            endTime: Date,
            blockId: number,
            measurements: WeatherMeasurements[]
        ) {
            const weatherData =
                yield DataViewerService.getHistoricalWeatherData(
                    startTime,
                    endTime,
                    blockId,
                    measurements
                );
            self.weatherData = weatherData;
        }),
    }))
    .actions((self) => ({
        applyFilter: flow(function* () {
            if (!self.form.blockId) {
                return message.error(`请选择观测区域`);
            }
            if (self.form.measurements.length === 0) {
                return message.error(`请选择观测要素`);
            }
            if (self.form.timeRange.length === 0) {
                return message.error(`请选择数据范围`);
            }
            self.isMenuDrawerVisible = false;
            self.loading = true;
            try {
                yield self.getHistoricalWeatherData(
                    self.form.timeRange[0],
                    self.form.timeRange[1],
                    self.form.blockId,
                    self.form.measurements as WeatherMeasurements[]
                );
            } catch (e) {
                if (e instanceof Error) {
                    message.error(e.message);
                }
            }
            self.loading = false;
        }),
        showMenuDrawer() {
            self.isMenuDrawerVisible = true;
        },
        hideMenuDrawer() {
            self.isMenuDrawerVisible = false;
        },
    }));

export interface IDataViewerStore extends Instance<typeof DataViewerStore> {}

export default DataViewerStore.create({
    form: {},
});
