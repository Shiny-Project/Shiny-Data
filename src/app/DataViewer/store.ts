import { types } from "mobx-state-tree";
import { Instance } from "mobx-state-tree";
import request from "src/services/request";
import BinaryDataTypes from "../../proto";
import { WeatherMeasurements } from "./types";

const DataViewerStore = types
    .model({
        example: 1,
    })
    .actions((self) => ({
        async getHistoricalWeatherData(
            startTime: Date,
            endTime: Date,
            blockId: number,
            measurements: WeatherMeasurements[]
        ) {
            const response = await request.post("/Weather/JMA/query", {
                startTime: startTime.toISOString(),
                endTime: endTime.toISOString(),
                blockId,
                factors: measurements,
            });
            console.log(response);
        },
    }));

export interface IDataViewerStore extends Instance<typeof DataViewerStore> {}

export default DataViewerStore.create();
