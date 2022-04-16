import { ADD, SUB } from "../actions/actionTypes";

const initialState = {
  counter: 0
};

const counters = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        counter: state.counter +1
      };

    case SUB:
      return {
        ...state,
        counter: state.counter -1
      };

    default:
      return state;
  }
};

export default counters;
