import { types } from "mobx-state-tree";
import { Instance } from "mobx-state-tree";
import request from "src/services/request";
import { base64ToUint8Array } from "src/utils/convert";
import BinaryDataTypes from "../../proto";
import { WeatherMeasurements } from "./types";

interface HistoricalWeatherDataResponse {
    result: string;
}

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
            const response = await request.post<HistoricalWeatherDataResponse>("/Weather/JMA/query", {
                startTime: startTime.toISOString(),
                endTime: endTime.toISOString(),
                blockId,
                factors: measurements,
            });
            const weatherData = BinaryDataTypes.HistoryWeatherDataResponse.decode(base64ToUint8Array(response.result));
            console.log(weatherData)
        },
    }));

export interface IDataViewerStore extends Instance<typeof DataViewerStore> {}

export default DataViewerStore.create();
