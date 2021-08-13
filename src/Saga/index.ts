/**
 * Implementation of Redux Saga
 */
import { takeEvery, put } from "redux-saga/effects";
import * as ActionType from "../Actions";
import axios from "../Utils/axios";

function* fetchAction(payload: any): any {
  yield put({ type: ActionType.FETCH_PENDING });

  //Axios API call to get response
  const response = yield axios.get(payload.fetchTypeRequest, {
    headers: { Accept: "application/json" },
  });

  if (response) {
    yield put({
      type: ActionType.FETCH_SUCCESS,
      response: response.data,
      requestInfo: payload.serviceName,
    });
  } else {
    yield put({
      type: ActionType.FETCH_FAILED,
      response: "Sometime went wrong",
      requestInfo: payload.serviceName,
    });
  }
}

function* sagas() {
  yield takeEvery(ActionType.FETCH_ACTION, fetchAction);
}

export default sagas;
