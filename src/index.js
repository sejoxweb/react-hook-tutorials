import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { createStore } from "redux";
import todoReducer from "./store/todoReducer";
import { Provider } from "react-redux";

const store = createStore(todoReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
