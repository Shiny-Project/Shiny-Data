import React from "react";
import { inject, observer } from "mobx-react";
import { Select } from "antd";
import { IDataViewerStore } from "src/app/DataViewer/stores";
import { StoreInjectedProps } from "src/types/common";
import RegionDefinition from "src/definitions/japan_all_stations.json";
import "./index.scss";

const { Option } = Select;

export interface FilterFormProps extends StoreInjectedProps<IDataViewerStore> {}

const FilterForm = (props: FilterFormProps): JSX.Element => {
    const store = props.store!;
    const { form } = store;
    return (
        <Select
            className="block-selector"
            onChange={(value) => form.updateBlockId(+value)}
        >
            {RegionDefinition.map((item) => {
                return (
                    <Option key={item.blockId} value={item.blockId}>
                        {item.blockId} - {item.name}
                    </Option>
                );
            })}
        </Select>
    );
};

export default inject("store")(observer(FilterForm));
