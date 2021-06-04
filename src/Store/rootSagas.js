import { all, fork } from "redux-saga/effects";
import { WatcherloginRequest } from "./sagas/authSagas";
import { watcherGetAllStudents } from "./sagas/userSagas";
export default function* root() {
  yield all([WatcherloginRequest(), watcherGetAllStudents()]);
}
