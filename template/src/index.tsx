import React from "react";
import { render } from "react-dom";
import { combineReducers, createStore } from "redux";

import { Provider } from "react-redux";

import { CounterReducer } from "./features/counter";

import App from "./App";
import * as serviceWorker from "./serviceWorker";

import "./index.css";

const rootReducer = combineReducers({
  count: CounterReducer,
});

const preloadedState = {};

const store = createStore(
  rootReducer,
  preloadedState,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
