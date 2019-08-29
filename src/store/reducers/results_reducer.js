import * as actionTypes from "../actions/actionTypes";

const initalState = {
  results: [],
  id: 0
};

const results_reducer = (state = initalState, action) => {
  let updatedState = { ...state };
  switch (action.type) {
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
        result: action.result
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
};

export default results_reducer;
