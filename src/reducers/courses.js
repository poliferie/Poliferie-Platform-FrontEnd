import { courseActions } from "../actions";

const course = (state = {}, action) => {
  switch (action.type) {
    case courseActions.ADD_ELEM:
      console.log("courses addelem");
      state = {
        ...state
      };
      state[action.id] = action.elem;
      return state;

    case courseActions.EMPTY:
      return {};

    default:
      return state;
  }
};

export default course;
