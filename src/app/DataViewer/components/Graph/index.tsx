import React, { useMemo } from "react";
import dayjs from "dayjs";
import { inject, observer } from "mobx-react";
import { Chart, Axis, Line } from "bizcharts";
import { StoreInjectedProps } from "src/types/common";
import { IHistoryWeatherDataResponseItem } from "src/proto";
import { IDataViewerStore } from "../../stores";
import { WeatherMeasurements, WeatherMeasurementsMap } from "../../types";
import "./index.scss";
import { PrecipitationMeasurements } from "../../definitions";

export interface GraphProps extends StoreInjectedProps<IDataViewerStore> {}

const formatWeatherData = (data: IHistoryWeatherDataResponseItem[]) => {
    let cursor = dayjs(data[0].time);
    return Array.from(data, (item) => {
        const result = [];
        const currentDate = dayjs(item.time);
        while (cursor.isBefore(currentDate, "day")) {
            // 填充无数据日期
            for (const key of Object.keys(item)) {
                if (
                    key !== "time" &&
                    PrecipitationMeasurements.includes(
                        key as WeatherMeasurements
                    )
                ) {
                    result.push({
                        time: dayjs(cursor).format("YYYY-MM-DD"),
                        type: key,
                        // @ts-ignore
                        value: 0,
                    });
                }
            }
            cursor = cursor.add(1, "day");
        }
        for (const key of Object.keys(item)) {
            if (key !== "time") {
                result.push({
                    time: dayjs(item.time).format("YYYY-MM-DD"),
                    type: key,
                    // @ts-ignore
                    value: item[key],
                });
            }
        }
        cursor = cursor.add(1, "day");
        return result;
    }).flat();
};

const Graph = (props: GraphProps): JSX.Element | null => {
    const store = props.store!;
    const { weatherData } = store;
    const data = useMemo(() => {
        console.log(weatherData.data);
        return !weatherData.data?.length
            ? null
            : formatWeatherData(weatherData.data);
    }, [weatherData.data]);
    const scale = {
        type: {
            formatter: (v: WeatherMeasurements) => WeatherMeasurementsMap[v],
        },
    };
    if (!data) {
        return null;
    }
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
