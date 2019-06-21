import { uniFilterActions, courseFilterActions } from "../actions";

function visibilityFilter(state = { courses: {}, universities: {} }, action) {
  var name = action.name;
  var elem = action.elem;

  switch (action.type) {
    // ADD UNI FILTER
    case uniFilterActions.ADD_ELEM:
      state = { ...state };
      state.universities[name] = elem;
      break;
    // ADD COURSE FILTER
    case courseFilterActions.ADD_ELEM:
      state = { ...state };
      state.courses[name] = elem;
      break;
    // DEFAULT
    default:
      break;
  }
  return state;
}

export default visibilityFilter;
