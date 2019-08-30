import * as actionTypes from "./actionTypes";

export const saveResult = result => {
  //DO ANY Transformation Required here on data
  return {
    type: actionTypes.STORE_RESULT,
    result: result
  };
};
export const storeResult = res => {
  return (dispatch, getState) => {
    setTimeout(() => {
      // minimize below pattern usage,any params required can be passed as we are passing `res`
      // const oldCounter = getState().ctr.counter;
      // console.log(oldCounter);
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
