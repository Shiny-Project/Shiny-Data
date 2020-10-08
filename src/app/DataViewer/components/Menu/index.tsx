import React, { useState } from "react";
import { inject } from "mobx-react";
import { Drawer, Menu } from "antd";
import { RightSquareOutlined } from "@ant-design/icons";
import { StoreInjectedProps } from "src/types/common";
import { IDataViewerStore } from "../../store";
import "./index.scss";

export interface HomeMenuProps extends StoreInjectedProps<IDataViewerStore> {}

const HomeMenu = (props: HomeMenuProps): JSX.Element => {
    const [visible, updateVisible] = useState(false);
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
