import React from "react";
import { render } from "react-dom";
import Photos from "./Photos";
import { store } from "./store";
import { Provider } from "react-redux";
import './index.css';

const App = () => (
    <Provider store={store}>
        <Photos />
    </Provider>
);

render(<App />, document.getElementById("root"));