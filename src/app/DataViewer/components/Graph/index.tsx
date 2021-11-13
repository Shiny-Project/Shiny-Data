import React, { useMemo } from "react";
import dayjs from "dayjs";
import { inject, observer } from "mobx-react";
import { Chart, Axis, Line, Interval } from "bizcharts";
import { StoreInjectedProps } from "src/types/common";
import { IHistoryWeatherDataResponseItem } from "src/proto";
import { IDataViewerStore } from "../../stores";
import { WeatherMeasurements, WeatherMeasurementsMap } from "../../types";
import { PrecipitationMeasurements } from "../../definitions";
import "./index.scss";

export interface GraphProps extends StoreInjectedProps<IDataViewerStore> {}

const formatWeatherData = (data: IHistoryWeatherDataResponseItem[]) => {
    let cursor = dayjs(data[0].time);
    return Array.from(data, (item) => {
        const result = [];
        const currentDate = dayjs(item.time);
        while (cursor.isBefore(currentDate, "day")) {
            // 填充无数据日期
            for (const key of Object.keys(item)) {
                if (key !== "time" && PrecipitationMeasurements.includes(key as WeatherMeasurements)) {
                    result.push({
                        time: dayjs(cursor).format("YYYY-MM-DD"),
                        type: key,
                        [key]: 0,
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
                    [key]: item[key],
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
    const measurements = useMemo(() => {
        if (!weatherData.data?.length) {
            return [];
        }
        const result = [];
        const firstItem = weatherData.data[0];
        for (const key of Object.keys(firstItem)) {
            if (key !== "time") {
                result.push(key);
            }
        }
        return result;
    }, [weatherData.data]);
    const data = useMemo(() => {
        console.log(weatherData.data);
        return !weatherData.data?.length ? null : formatWeatherData(weatherData.data);
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
            <Chart data={data} scale={scale} autoFit key={measurements}>
                <Axis name="time"></Axis>
                <Axis name="value"></Axis>
                {measurements.includes(WeatherMeasurements.SnowFall) &&
                    measurements.includes(WeatherMeasurements.SnowDepth) && (
                        <Interval
                            adjust={[
                                {
                                    type: "dodge",
                                    marginRatio: 0,
                                },
                            ]}
                            color="type"
                            position="time*value"
                        />
                    )}
                {measurements.includes(WeatherMeasurements.Precipitation) && (
                    <Interval
                        adjust={[
                            {
                                type: "dodge",
                                marginRatio: 0,
                            },
                        ]}
                        color="type"
                        position="time*value"
                    />
                )}
                {measurements.includes(WeatherMeasurements.HighestTemperature) &&
                    measurements.includes(WeatherMeasurements.LowestTemperature) && (
                        <Line position="time*value" color="type" label="value"></Line>
                    )}
            </Chart>
        </div>
    );
};

export default inject("store")(observer(Graph));
