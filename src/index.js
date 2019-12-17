import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducer/reducer";

import "./index.css";

import Dashboard from "./dashboard/Dashboard";

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <Dashboard />
  </Provider>,
  document.getElementById("root")
);
