import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import * as serviceWorker from "./serviceWorker";
import counterReducer from "./store/reducers/counter_reducer";
import resultsReducer from "./store/reducers/results_reducer";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";

const rootReducer = combineReducers({
  ctr: counterReducer,
  res: resultsReducer
});

const logger = state => {
  return next => {
    return action => {
      console.log("[Middleware] dispatching", action);
      const result = next(action);
      console.log("[Middleware] next state", store.getState());
      return result;
    };
  };
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(logger, ReduxThunk))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
