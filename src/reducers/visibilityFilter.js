import { uniFilterActions, courseFilterActions, headerActions } from "../actions";

function visibilityFilter(state = { courses: {}, universities: {} }, action) {
  var name = action.name;
  var elem = action.elem;

  switch (action.type) {
    //Add Uni filter
    case uniFilterActions.ADD_ELEM:
      state = { ...state };
      state.universities[name] = elem;
      break;

    //Add Course filter
    case courseFilterActions.ADD_ELEM:
      state = { ...state };
      state.courses[name] = elem;
      break;

    //Remove Uni filter
    case uniFilterActions.REMOVE_ELEM:
      state = { ...state };
      let {[name]: removedUniFilter, ...restOfUniFilters} = state.universities;
      state.universities = restOfUniFilters;
      break;

    //Remove Course filter
    case courseFilterActions.REMOVE_ELEM:
        state = { ...state };
        let {[name]: removedCourseFilter, ...restOfCourseFilters} = state.courses;
        state.courses = restOfCourseFilters;
      break;

    //Toggle between uni/crs view
    case headerActions.TOGGLE_VIEW:
      state = { ...state };
      state.viewFocus = elem;
      break;
      
    //Default
    default:
      break;
  }
  return state;
}

export default visibilityFilter;
