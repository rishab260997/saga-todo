import { takeLatest, takeEvery } from "redux-saga/effects";
import * as constant from "../actionType/actionType";
import { put } from "redux-saga/effects";
import { addTodos } from "../action/index";

export function* AddTodoSaga(action) {
  let data = action;
  if (data === 0) {
    yield put(addTodos({ response: data }));
  }
}

export function* addTodoRequest() {
  yield takeLatest(constant.ADD_TODO, AddTodoSaga);
}
