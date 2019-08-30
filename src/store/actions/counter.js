import * as actionTypes from "./actionTypes";
export const increment = () => {
  //DO ANY Transformation Required here on data
  return {
    type: actionTypes.INCREMENT
  };
};
export const decrement = () => {
  //DO ANY Transformation Required here on data
  return {
    type: actionTypes.DECREMENT
  };
};
export const add = value => {
  //DO ANY Transformation Required here on data
  return {
    type: actionTypes.ADD,
    value: value
  };
};
export const subtract = value => {
  //DO ANY Transformation Required here on data
  return {
    type: actionTypes.SUBTRACT,
    value: value
  };
};
