import React from "react";
import { inject, observer } from "mobx-react";
import { StoreInjectedProps } from "src/types/common";
import FullscreenSpinner from "src/components/FullscreenSpinner";
import { IDataViewerStore } from "../../stores";

export interface SpinnerProps extends StoreInjectedProps<IDataViewerStore> {}

const Spinner = (props: SpinnerProps): JSX.Element | null => {
    const store = props.store!;
    return store.loading ? <FullscreenSpinner /> : null;
};

export default inject("store")(observer(Spinner));
