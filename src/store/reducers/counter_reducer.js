import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initalState = {
  counter: 0
};

const counter_reducer = (state = initalState, action) => {
  // let updatedState = Object.assign({}, state);
  switch (action.type) {
    case actionTypes.INCREMENT:
      return updateObject(state, { counter: state.counter + 1 });
    case actionTypes.DECREMENT:
      return updateObject(state, { counter: state.counter - 1 });
    case actionTypes.ADD:
      return updateObject(state, { counter: state.counter + action.value });
    case actionTypes.SUBTRACT:
      return updateObject(state, { counter: state.counter - action.value });
    default:
      return state;
  }
};

export default counter_reducer;
