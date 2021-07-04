import { takeEvery, call, put, takeLatest } from "redux-saga/effects";
import api from "../../api/promise";

function* addPromise(action) {
  try {
    console.log("--add promise--");
    console.log(action);
    const result = yield call(api.add, action.payload);
    console.log(result);
    yield put({
      type: "ADD_PROMISE_SUCCEEDED",
      payload: { id: result.data.id, ...action.payload },
    });
  } catch (e) {
    alert(e.message);
  }
}

function* fetchPromiseList(action) {
  try {
    const result = yield call(api.fetch);
    yield put({ type: "FETCH_PROMISELIST_SUCCEEDED", payload: result.data });
  } catch (e) {
    alert(e.message);
  }
}

function* removePromise(action) {
  try {
    const result = yield call(api.remove, action.payload);
    console.log(result);
    yield put({
      type: "REMOVE_PROMISE_SUCCEEDED",
      payload: action.payload,
    });
  } catch (e) {
    alert(e.message);
  }
}

function* modifyPromise(action) {
  try {
    const result = yield call(api.modify, action.payload);
    console.log(result);
    yield put({
      type: "MODIFY_PROMISE_SUCCEEDED",
      payload: result.data,
    });
  } catch (e) {
    alert(e.message);
  }
}
function* promiseSaga() {
  yield takeEvery("ADD_PROMISE", addPromise);
  yield takeEvery("REMOVE_PROMISE", removePromise);
  yield takeEvery("MODIFY_PROMISE", modifyPromise);
  yield takeLatest("FETCH_PROMISELIST", fetchPromiseList);
}
export default promiseSaga;
