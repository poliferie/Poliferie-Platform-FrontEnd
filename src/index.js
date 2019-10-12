import React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./components/App";
import rootReducer from "./reducers";
import { BrowserRouter } from "react-router-dom";

import Universities from "./UniversitiesDSET";
import Courses from "./CoursesDSET";

const state = {
  universities: Universities,
  courses: Courses,
  visibilityFilter: {
    courses: {},
    universities: {},
    //TODO Move viewFocus one level higher
    viewFocus: 'uni'
  },
  stringFilters: {
    courses: {},
    universities: {}
  }
};

//Allows to use the Redux browser devtools (only for development)
const store = createStore(rootReducer, state, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
//const store = createStore(rootReducer, state);

render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
