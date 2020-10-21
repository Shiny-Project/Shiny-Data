import React, { useEffect } from "react";
import { inject, observer } from "mobx-react";
import { StoreInjectedProps } from "src/types/common";
import { IDataViewerStore } from "../../stores";
import "./index.scss";

export interface GraphProps extends StoreInjectedProps<IDataViewerStore> {}

const Graph = (props: GraphProps): JSX.Element | null => {
    const store = props.store!;
    const { weatherData } = store;
    useEffect(() => {
        if (!weatherData.data) {
            return;
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
    }, [weatherData]);
    return <div id="graph-container"></div>;
};

export default inject("store")(observer(Graph));
