import { types } from "mobx-state-tree";
import { Instance } from "mobx-state-tree";
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
        isMenuDrawerVisible: false
    })
    .actions((self) => ({
        async getHistoricalWeatherData(
            startTime: Date,
            endTime: Date,
            blockId: number,
            measurements: WeatherMeasurements[]
        ) {
            self.weatherData = await DataViewerService.getHistoricalWeatherData(
                startTime,
                endTime,
                blockId,
                measurements
            );
        },
    }))
    .actions((self) => ({
        async applyFilter() {
            self.loading = true;
            await self.getHistoricalWeatherData(
                self.form.timeRange[0],
                self.form.timeRange[1],
                self.form.blockId,
                self.form.measurements as WeatherMeasurements[]
            );
            self.loading = false;
        },
        showMenuDrawer() {
            self.isMenuDrawerVisible = true;
        },
        hideMenuDrawer() {
            self.isMenuDrawerVisible = false;
        }
    }));

export interface IDataViewerStore extends Instance<typeof DataViewerStore> {}

export default DataViewerStore.create({
    form: {},
});
