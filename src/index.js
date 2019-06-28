import React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./components/App";
import rootReducer from "./reducers";
import { BrowserRouter } from "react-router-dom";

import Universities from "./Universities";
console.log("@TODO to be used instead of hardocoded data", Universities);

const state = {
  universities: {
    101: { name: "sapienza uni", students: 141 },
    123: { name: "torve", students: 191 },
    102: { name: "romatre uni", students: 99 },
    103: { name: "sapienza uni", students: 141 },
    124: { name: "torve", students: 191 },
    104: { name: "romatre uni", students: 99 },
    105: { name: "sapienza uni", students: 141 },
    125: { name: "torve", students: 191 },
    106: { name: "romatre uni", students: 99 }
  },
  courses: {
    101: { name: "inginf", students: 101 },
    102: { name: "mazzpazz", students: 99 }
  },
  visibilityFilter: {
    courses: {},
    universities: {
      nstudent: e => {
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
