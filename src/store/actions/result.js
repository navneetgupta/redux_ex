import * as actionTypes from "./actionTypes";

export const saveResult = result => {
  //DO ANY Transformation Required here on data
  return {
    type: actionTypes.STORE_RESULT,
    result: result
  };
};
export const storeResult = res => {
  return dispatch => {
    setTimeout(() => {
      dispatch(saveResult(res));
    }, 2000);
  };
};
export const deleteResult = id => {
  //DO ANY Transformation Required here on data
  return {
    type: actionTypes.DELETE_RESULT,
    id: id
  };
};
