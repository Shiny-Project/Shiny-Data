import React from "react";
import { inject, observer } from "mobx-react";
import { Chart, Axis, Line } from "bizcharts";
import { StoreInjectedProps } from "src/types/common";
import { IDataViewerStore } from "../../stores";
import { WeatherMeasurements, WeatherMeasurementsMap } from "../../types";
import "./index.scss";

export interface GraphProps extends StoreInjectedProps<IDataViewerStore> {}

const Graph = (props: GraphProps): JSX.Element | null => {
    const store = props.store!;
    const { weatherData } = store;
    if (!weatherData.data) {
        return null;
    }
    const data = Array.from(weatherData.data, (item) => {
        const result = [];
        for (const key of Object.keys(item)) {
            if (key !== "time") {
                result.push({
                    time: item.time,
                    type: key,
                    // @ts-ignore
                    value: item[key],
                });
            }
        }
        return result;
    }).flat();
    const scale = {
        type: {
            formatter: (v: WeatherMeasurements) => WeatherMeasurementsMap[v],
        },
    };
    return (
        <div className="graph-container">
            <Chart data={data} scale={scale} autoFit>
                <Axis name="time"></Axis>
                <Axis name="value"></Axis>
                <Line position="time*value" color="type" label="value"></Line>
            </Chart>
        </div>
    );
};

export default inject("store")(observer(Graph));
