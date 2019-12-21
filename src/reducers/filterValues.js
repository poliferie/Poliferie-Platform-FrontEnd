import { uniFilterValueActions, courseFilterValueActions } from "../actions";

function filterValues(state = { courses: {}, universities: {} }, action) {
  var name = action.name;
  var elem = action.value;

  switch (action.type) {
    //Add Uni filter value
    case uniFilterValueActions.ADD_ELEM:
      state = { ...state };
      //This variable will contain the filter value chosen by the user, or empty
      //In particular it will contain a number for slider filters, or an obj containing a list for choices filters
      state.universities[name] = elem;
      break;

    //Add Course filter value
    case courseFilterValueActions.ADD_ELEM:
      state = { ...state };
      state.courses[name] = elem;
      break;

    //Remove Uni filter value
    case uniFilterValueActions.REMOVE_ELEM:
      state = { ...state };
      let {[name]: removedUniFilterValue, ...restOfUniFilterValues} = state.universities;
      state.universities = restOfUniFilterValues;
      break;

    //Remove Course filter value
    case courseFilterValueActions.REMOVE_ELEM:
      state = { ...state };
      let {[name]: removedCourseFilterValue, ...restOfCourseFilterValues} = state.courses;
      state.courses = restOfCourseFilterValues;
      break;

    //Empty Uni filter values
    case uniFilterValueActions.EMPTY:
      state = { ...state };
      state.universities = {};
      break;

    //Empty Course filter values
    case courseFilterValueActions.EMPTY:
      state = { ...state };
      state.courses = {};
      break;

    //Default
    default:
      break;
  }
  return state;
}

export default filterValues;
