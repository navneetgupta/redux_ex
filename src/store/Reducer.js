import * as actionTypes from "./actions";

const initalState = {
  counter: 0,
  results: [],
  id: 0
};

const reducer = (state = initalState, action) => {
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
    case actionTypes.STORE_RESULT:
      // push modifies the old array
      // updatedState.results = [...updatedState.results];
      // updatedState.results.push({
      //   id: updatedState.id + 1,
      //   result: updatedState.counter
      // });
      //
      // Instead we can use concat which creates newArray append the value and return that newArray
      updatedState.results = updatedState.results.concat({
        id: updatedState.id + 1,
        result: updatedState.counter
      });
      updatedState.id = updatedState.id + 1;
      break;
    case actionTypes.DELETE_RESULT:
      // const oldResults = [...updatedState.results];
      // not needed since filter already return new array instead of modyfing old one
      const newResults = updatedState.results.filter(({ result, id }) => {
        return id !== action.id;
      });
      updatedState.results = newResults;
      break;
    default:
  }
  return updatedState;

  // switch (action.type) {
  //   case "INCREMENT":
  //     return { counter: state.counter + 1 };
  //   case "DECREMENT":
  //     return { counter: state.counter - 1 };
  //   case "ADD":
  //     return { counter: state.counter + action.value };
  //   case "SUB":
  //     return { counter: state.counter - action.value };
  //   default:
  //     return state;
  // }
};

export default reducer;
