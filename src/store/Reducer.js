const initalState = {
  counter: 0,
  results: [],
  id: 0
};

const reducer = (state = initalState, action) => {
  let updatedState = { ...state };
  // let updatedState = Object.assign({}, state);
  switch (action.type) {
    case "INCREMENT":
      updatedState.counter = updatedState.counter + 1;
      break;
    case "DECREMENT":
      updatedState.counter = updatedState.counter - 1;
      break;
    case "ADD":
      updatedState.counter = updatedState.counter + action.value;
      break;
    case "SUB":
      updatedState.counter = updatedState.counter - action.value;
      break;
    case "STORE":
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
    case "DELETE":
      const oldResults = [...updatedState.results];
      const newResults = oldResults.filter(({ result, id }) => {
        return id !== action.id;
      });
      updatedState.results = newResults;
      console.log(updatedState);
      break;
    default:
  }
  console.log(updatedState);
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
