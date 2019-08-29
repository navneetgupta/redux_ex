import * as actionTypes from "./actionTypes";

export const saveResult = result => {
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
  return {
    type: actionTypes.DELETE_RESULT,
    id: id
  };
};