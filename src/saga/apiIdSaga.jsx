import { call, put, takeLatest } from "redux-saga/effects";
import axios from 'axios';
import { idApi } from '../endpoints/endpoints'

export default function* apiIdSaga() {
  yield takeLatest('API_CALL_ID_REQUEST', workerSaga);
}

function* workerSaga(userId) { 
  try {
    const response = yield call(fetchApiId, userId.payload);
    const data = response.data;
   
    yield put({ type: "API_CALL_ID_SUCCESS", data });

  } catch (error) {

    yield put({ type: "API_CALL_ID_FAILURE", error });
  }

}

export const fetchApiId = id => {
	return axios.get(`${idApi}${id}`)
}