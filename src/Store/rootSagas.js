import { all, fork } from "redux-saga/effects";
import { WatcherloginRequest } from "./sagas/authSagas";
export default function* root() {
  yield all([WatcherloginRequest()]);
}
