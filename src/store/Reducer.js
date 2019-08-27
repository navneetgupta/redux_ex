const initalState = {
  counter: 4
};

const reducer = (state = initalState, action) => {
  console.log(action.type);
  let updatedState = { ...state };
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
    default:
  }
  console.log(updatedState);
  return updatedState;
};

export default reducer;
