import { combineReducers } from "redux";
import courses from "./courses";
import universities from "./universities";
import visibilityFilter from "./visibilityFilter";

export default combineReducers({
  universities,
  courses,
  visibilityFilter
});
