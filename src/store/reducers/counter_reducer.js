import * as actionTypes from "../actions/actions";

const initalState = {
  counter: 0
};

const counter_reducer = (state = initalState, action) => {
  let updatedState = { ...state };
  // let updatedState = Object.assign({}, state);
  switch (action.type) {
    case actionTypes.INCREMENT:
      updatedState.counter = updatedState.counter + 1;
      break;
    case actionTypes.DECREMENT:
      updatedState.counter = updatedState.counter - 1;
      break;
    case actionTypes.ADD:
      updatedState.counter = updatedState.counter + action.value;
      break;
    case actionTypes.SUBTRACT:
      updatedState.counter = updatedState.counter - action.value;
      break;
    default:
  }
  return updatedState;
};

export default counter_reducer;
