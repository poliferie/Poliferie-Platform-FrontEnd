import { combineReducers } from "redux";
import courses from "./courses";
import universities from "./universities";
import visibilityFilter from "./visibilityFilter";
import stringFilters from "./stringFilters";

export default combineReducers({
  universities,
  courses,
  visibilityFilter,
  stringFilters
});
