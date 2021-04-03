import { createAction } from "redux-actions";
import { call, put } from "redux-saga/effects";

export const asyncActionCreator = (actionName) => {
  const asyncTypeAction = ["_REQUREST", "_SUCCESS", "_FAILURE"];
  return {
    REQUEST: actionName + asyncTypeAction[0],
    SUCCESS: actionName + asyncTypeAction[1],
    FAILURE: actionName + asyncTypeAction[2],
  };
};

export const createAsyncAction = (asyncAction) => {
  return {
    request: createAction(asyncAction.REQUEST),
    success: createAction(asyncAction.SUCCESS),
    failure: createAction(asyncAction.FAILURE),
  };
};

export default function createAsyncSaga(asyncAction, asyncFunction) {
  return function* saga(action) {
    try {
      const result = yield call(asyncFunction, action?.payload);
      console.log(`result: ${result}`);
      yield put(asyncAction.success(result));
    } catch (e) {
      console.log("=============error==============");
      yield put(asyncAction.failure({ error: e }));
    }
  };
}
