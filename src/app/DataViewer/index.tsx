import React from "react";
import { Provider } from "mobx-react";
import Menu from "./components/Menu";
import store from "./stores";

class DataViewer extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Menu />
            </Provider>
        );
    }
}

export default DataViewer;
