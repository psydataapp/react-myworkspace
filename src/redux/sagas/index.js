import { fork } from "@redux-saga/core/effects";
import promiseSaga from "./promise";

export default function* rootSaga() {
  yield fork(promiseSaga);
}
