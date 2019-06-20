import React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./components/App";
import rootReducer from "./reducers";
import { BrowserRouter } from "react-router-dom";

const state = {
  universities: {
    101: { name: "sapienza", students: 101 },
    102: { name: "romatre", students: 99 }
  },
  courses: {
    101: { name: "inginf", students: 101 },
    102: { name: "mazzpazz", students: 99 }
  },
  visibilityFilter: {
    courses: [],
    universities: {
      nstud: e => {
        return e.students > 100;
      }
    }
  }
};

const store = createStore(rootReducer, state);
console.log("store", store);
render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
