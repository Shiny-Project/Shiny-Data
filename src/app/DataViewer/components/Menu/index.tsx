import React from "react";
import { inject, observer } from "mobx-react";
import { Drawer } from "antd";
import { RightSquareOutlined } from "@ant-design/icons";
import { StoreInjectedProps } from "src/types/common";
import FilterForm from "./components/FilterForm";
import { IDataViewerStore } from "../../stores";
import "./index.scss";

export interface HomeMenuProps extends StoreInjectedProps<IDataViewerStore> {}

const HomeMenu = (props: HomeMenuProps): JSX.Element => {
    const store = props.store!;
    const { showMenuDrawer, hideMenuDrawer } = store;
    return (
        <>
            <Drawer
                placement="left"
                visible={store.isMenuDrawerVisible}
                title="Shiny Data"
                width="350"
                onClose={() => {
                    hideMenuDrawer();
                }}
            >
                <FilterForm />
            </Drawer>
            <div
                className="floating-icon"
                onClick={() => {
                    showMenuDrawer();
                }}
            >
                <RightSquareOutlined />
            </div>
        </>
    );
};

export default inject("store")(observer(HomeMenu));
