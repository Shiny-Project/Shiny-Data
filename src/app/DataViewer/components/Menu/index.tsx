import React, { useState, useEffect } from "react";
import { inject, observer } from "mobx-react";
import { Drawer } from "antd";
import { RightSquareOutlined } from "@ant-design/icons";
import { StoreInjectedProps } from "src/types/common";
import FilterForm from "./components/FilterForm";
import { IDataViewerStore } from "../../stores";
import "./index.scss";

export interface HomeMenuProps extends StoreInjectedProps<IDataViewerStore> {}

const HomeMenu = (props: HomeMenuProps): JSX.Element => {
    const [visible, updateVisible] = useState(false);
    useEffect(() => {

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
                <FilterForm />
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

export default inject("store")(observer(HomeMenu));
