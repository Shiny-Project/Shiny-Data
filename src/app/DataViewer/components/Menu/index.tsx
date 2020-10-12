import React, { useState, useEffect } from "react";
import { inject } from "mobx-react";
import { Drawer, Menu } from "antd";
import { RightSquareOutlined } from "@ant-design/icons";
import { StoreInjectedProps } from "src/types/common";
import { IDataViewerStore } from "../../store";
import "./index.scss";

export interface HomeMenuProps extends StoreInjectedProps<IDataViewerStore> {}

const HomeMenu = (props: HomeMenuProps): JSX.Element => {
    const [visible, updateVisible] = useState(false);
    const { store } = props;
    const { getHistoricalWeatherData } = store!;
    useEffect(() => {
        getHistoricalWeatherData(
            new Date("2010-06-01T00:00:00.000Z"),
            new Date("2010-07-01T00:00:00.000Z"),
            47610,
            ["averageTemperature", "highestTemperature"]
        );
    }, []);
    return (
        <>
            <Drawer
                placement="left"
                visible={visible}
                title="Shiny Data"
                onClose={() => {
                    updateVisible(false);
                }}
            >
                <Menu />
            </Drawer>
            <div
                className="floating-icon"
                onClick={() => {
                    updateVisible(true);
                }}
            >
                <RightSquareOutlined />
            </div>
        </>
    );
};

export default inject("store")(HomeMenu);
