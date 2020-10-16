import React from "react";
import { Provider } from "mobx-react";
import Menu from "./components/Menu";
import Spinner from "./components/Spinner";
import store from "./stores";

class DataViewer extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Menu />
                <Spinner />
            </Provider>
        );
    }
}

export default DataViewer;
