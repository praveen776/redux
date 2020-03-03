import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";

// Action
const increment = () => {
  return {
    type: "increment"
  };
};
const decrement = () => {
  return {
    type: "decrement"
  };
};

// Reducer
const counter = (state = 0, action) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};

// store

let store = createStore(counter);

// console
store.subscribe(() => {
  console.log(store.getState());
});

// dispatch
store.dispatch(increment());
store.dispatch(decrement());

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
