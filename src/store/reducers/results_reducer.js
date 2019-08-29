import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";
const initalState = {
  results: [],
  id: 0
};

const results_reducer = (state = initalState, action) => {
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
      return updateObject(state, {
        results: state.results.concat({
          id: state.id + 1,
          result: action.result
        }),
        id: state.id + 1
      });
    case actionTypes.DELETE_RESULT:
      // const oldResults = [...updatedState.results];
      // not needed since filter already return new array instead of modyfing old one

      return updateObject(state, {
        results: state.results.filter(({ result, id }) => {
          return id !== action.id;
        })
      });
    default:
      return state;
  }
};

export default results_reducer;
