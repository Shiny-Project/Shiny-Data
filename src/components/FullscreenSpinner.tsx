import React from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

function FullscreenSpinner(): JSX.Element {
    return (
        <div
            style={{
                width: `100vw`,
                height: `100vh`,
                display: `flex`,
                justifyContent: `center`,
                alignItems: `center`,
            }}
        >
            <Spin indicator={antIcon} />
        </div>
    );
}

export default FullscreenSpinner;
