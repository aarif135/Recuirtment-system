import { takeEvery, takeLatest, call, put } from "redux-saga/effects";
import { loginWithEmail } from "../../config";
export function* loginRequest(action) {
  try {
    const res = yield call(apiData, action.body);
    localStorage.setItem("users", JSON.stringify(res));
    if (res) {
      if (res.role === "student") {
        action.stdCb();
      }
      if (res.role === "company") {
        action.companyCb();
      }
      if (res.role === "admin") {
        action.adminCb();
      }
    }
  } catch (e) {
    console.log(e);
  }
}

export function* WatcherloginRequest() {
  yield takeLatest("LOGIN_REQUEST", loginRequest);
}

const apiData = async (body) => {
  const { email, password } = body;

  const apiRecord = await loginWithEmail(email, password);
  return apiRecord;
};
