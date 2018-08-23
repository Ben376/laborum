import { fork, call, put } from "redux-saga/effects";
import { fetchingDisplayData } from '../actions/index';

export function* rootSaga() {
  yield fork(workerSaga);
}

function* workerSaga() {
  try {
    const response = yield call(fetchingDisplayData);
    const data = response.data.message;

    yield put({ type: "FETCH_DISPLAY", data });

  } catch (error) {

    yield put({ type: "FETCH_ERROR", error });
  }
}