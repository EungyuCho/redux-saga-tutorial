import { delay } from "redux-saga";
import { all, put, takeEvery, call, select, take } from "redux-saga/effects";

export function* helloSaga() {
  console.log("Hello Saga!");
}

export function* incrementAsync() {
  yield call(delay, 1000);
  yield put({ type: "INCREMENT" });
}

export function* decrementAsync() {
  yield call(delay, 1000);
  yield put({ type: "DECREMENT" });
}

export function* watchIncrementAsync() {
  yield takeEvery("INCREMENT_ASYNC", incrementAsync);
}

export function* watchDecrementAsync() {
  yield takeEvery("DECREMENT_ASYNC", decrementAsync);
}

export function* watchAndLog() {
  while (true) {
    const action = yield take("*"); // 모든 Action에 대해서 Dispatch를 기다림
    const state = yield select();

    console.log(action);
    console.log(state);
  }
}

export default function* rootSaga() {
  yield all([
    helloSaga(),
    watchIncrementAsync(),
    watchDecrementAsync(),
    watchAndLog(),
  ]);
}
