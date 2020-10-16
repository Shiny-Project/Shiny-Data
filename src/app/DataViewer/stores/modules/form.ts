import { types, cast } from "mobx-state-tree";

const measurementsMap = {
    temperature: [
        "averageTemperature",
        "highestTemperature",
        "lowestTemperature",
    ],
    precipitation: [
        "precipitation",
        "oneHourMaxPrecipitation",
        "tenMinuteMaxPrecipitation",
    ],
};

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
        updateMeasurementGroup(group: 'temperature' | 'precipitation') {
            self.measurementGroup = group;
            self.measurements.splice(0, self.measurements.length, ...measurementsMap[group]);
        },
        updateTimeRange(timeRange: [Date, Date]) {
            self.timeRange = cast([timeRange[0], timeRange[1]]);
        },
    }));

export default FormStore;
