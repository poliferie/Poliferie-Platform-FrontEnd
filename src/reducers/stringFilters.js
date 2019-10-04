import { uniStringFilterActions, courseStringFilterActions } from "../actions";

function stringFilters(state = { courses: {}, universities: {} }, action) {
    let name = action.name;
    let filter = action.elem;
    let phrase = action.phrase;
  
    switch (action.type) {  
      //Add Course filter
      case uniStringFilterActions.ADD_ELEM:
        state = { ...state };
        state.universities[name] = {
          phrase: phrase,
          filter: filter
        };
        break;
  
      //Empty Course filters
      case uniStringFilterActions.EMPTY:
        state = { ...state };
        state.universities = {};
        break;

      //Add Uni filter
      case courseStringFilterActions.ADD_ELEM:
        state = { ...state };
        state.courses[name] = {
          phrase: phrase,
          filter: filter
        };
        break;
  
      //Empty Uni filters
      case courseStringFilterActions.EMPTY:
        state = { ...state };
        state.courses = {};
        break;
  
      //Default
      default:
        break;
    }
    return state;
  }
  
  export default stringFilters;
  