import { call, put, takeLatest, spawn } from "redux-saga/effects";
import axios from 'axios';
import apiIdSaga from './apiIdSaga'
import { listApi } from '../endpoints/endpoints'

export function* rootSaga() {
  yield takeLatest('FETCH_DISPLAY_REQUEST', workerSaga);
}

function* workerSaga() {
  try {
    const response = yield call(fetchingDisplayData);
    const data = response.data;

    yield put({ type: "FETCH_DISPLAY", data });

  } catch (error) {

    yield put({ type: "FETCH_ERROR", error });
  }

yield spawn(apiIdSaga);

}

export const fetchingDisplayData = () => {
      return axios.get(listApi)
}
