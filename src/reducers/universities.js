import { uniActions } from "../actions";

const universities = (state = {}, action) => {
  switch (action.type) {
    case uniActions.ADD_ELEM:
      state = {
        ...state
      };
      state[action.id] = action.elem;
      return state;

    case uniActions.EMPTY:
      return {};

    default:
      return state;
  }
};

export default universities;
