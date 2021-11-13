import BaseService from "src/common/BaseService";
import { base64ToUint8Array } from "src/utils/convert";
import { WeatherMeasurements } from "./types";
import BinaryDataTypes from "../../proto";

interface HistoricalWeatherDataResponse {
    result: string;
}

class DataViewerService extends BaseService {
    async getHistoricalWeatherData(
        startTime: Date,
        endTime: Date,
        blockId: number,
        measurements: WeatherMeasurements[]
    ) {
        const response = await this.request.post<HistoricalWeatherDataResponse>("/Weather/JMA/query", {
            startTime: startTime.toISOString(),
            endTime: endTime.toISOString(),
            blockId,
            factors: measurements,
        });
        const weatherData = BinaryDataTypes.HistoryWeatherDataResponse.decode(base64ToUint8Array(response.result));
        return weatherData;
    }
}

export default new DataViewerService();
