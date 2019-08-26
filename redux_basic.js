const redux = require("redux");

const createStore = redux.createStore;

const initialState = {
  counter: 0
};

// Base Reducer
const rootReducer = (state = initialState, action) => {
  // return new State after applying the action on initalState . For now just returnign the State
  switch (action.type) {
    case "INC_COUNTER":
      return {
        ...state,
        counter: state.counter + 1
      };
    case "ADD_10_TO_COUNTER":
      return {
        ...state,
        counter: state.counter + action.value
      };
    default:
      return state;
  }
  return state;
};

//Store
const store = createStore(rootReducer);
console.log(store.getState());

// Dispatcher
store.dispatch({ type: "INC_COUNTER" });
store.dispatch({ type: "ADD_10_TO_COUNTER", value: 10 });
console.log(store.getState());
