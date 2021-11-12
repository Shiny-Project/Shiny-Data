import { types, cast } from "mobx-state-tree";
import { WeatherMeasurements } from "../../types";

const measurementGroupMap = {
    temperature: [
        WeatherMeasurements.AverageTemperature,
        WeatherMeasurements.HighestTemperature,
        WeatherMeasurements.LowestTemperature,
    ],
    precipitation: [
        WeatherMeasurements.Precipitation,
        // "oneHourMaxPrecipitation",
        // "tenMinuteMaxPrecipitation",
    ],
    snow: [WeatherMeasurements.SnowFall, WeatherMeasurements.SnowDepth],
};

export type MeasurementGroup = "temperature" | "precipitation" | "snow";

const FormStore = types
    .model({
        blockId: types.optional(types.number, 0),
        measurementGroup: types.optional(types.string, ""),
        measurements: types.optional(types.array(types.string), []),
        timeRange: types.optional(types.array(types.Date), []),
    })
    .actions((self) => ({
        updateBlockId(blockId: number) {
            self.blockId = blockId;
        },
        updateMeasurementGroup(group: MeasurementGroup) {
            self.measurementGroup = group;
            self.measurements.splice(
                0,
                self.measurements.length,
                ...measurementGroupMap[group]
            );
        },
        updateTimeRange(timeRange: [Date, Date]) {
            self.timeRange = cast([timeRange[0], timeRange[1]]);
        },
    }));

export default FormStore;
