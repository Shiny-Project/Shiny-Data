import React from "react";
import { inject, observer } from "mobx-react";
import { Form, Select, DatePicker, Button } from "antd";
import { IDataViewerStore } from "src/app/DataViewer/stores";
import { StoreInjectedProps } from "src/types/common";
import RegionDefinition from "src/definitions/japan_all_stations.json";
import "./index.scss";

const { Option } = Select;

export interface FilterFormProps extends StoreInjectedProps<IDataViewerStore> {}

const FilterForm = (props: FilterFormProps): JSX.Element => {
    const store = props.store!;
    const { form, hideMenuDrawer, applyFilter } = store;
    return (
        <>
            <Form>
                <Form.Item>
                    <Select
                        placeholder="请选择观测台站"
                        onChange={(value: number) => form.updateBlockId(value)}
                    >
                        {RegionDefinition.map((item) => {
                            return (
                                <Option key={item.blockId} value={item.blockId}>
                                    {item.blockId} - {item.name}
                                </Option>
                            );
                        })}
                    </Select>
                </Form.Item>
                <Form.Item>
                    <Select
                        placeholder="请选择观测要素组合"
                        onChange={(value: 'temperature' | 'precipitation') => {
                            form.updateMeasurementGroup(value);
                        }}
                    >
                        <Option value="temperature">气温</Option>
                        <Option value="precipitation">降水</Option>
                    </Select>
                </Form.Item>
                <Form.Item>
                    <DatePicker.RangePicker
                        className="date-picker"
                        onChange={(values, valueStrings) => {
                            form.updateTimeRange([
                                new Date(valueStrings[0]),
                                new Date(valueStrings[1]),
                            ]);
                        }}
                    ></DatePicker.RangePicker>
                </Form.Item>
            </Form>
            <Button type="primary" onClick={() => {
                hideMenuDrawer();
                applyFilter();
            }}>应用</Button>
        </>
    );
};

export default inject("store")(observer(FilterForm));
