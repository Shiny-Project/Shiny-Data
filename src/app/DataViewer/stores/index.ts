import { types } from "mobx-state-tree";
import { Instance } from "mobx-state-tree";
import DataViewerService from "../service";
import { WeatherMeasurements } from "../types";
import BinaryDataTypes from "../../../proto";
import FormStore from "./modules/form";

const DataViewerStore = types
    .model({
        example: 1,
        weatherData: types.frozen<
            Partial<BinaryDataTypes.HistoryWeatherDataResponse>
        >({}),
        form: FormStore,
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
    }));

export interface IDataViewerStore extends Instance<typeof DataViewerStore> {}

export default DataViewerStore.create({
    form: {},
});
