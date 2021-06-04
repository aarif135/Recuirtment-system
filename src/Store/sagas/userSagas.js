import { takeLatest, call, put } from "redux-saga/effects";
import { fetchAllStudents } from "../../config";
import { successGetStudent } from "../actions/userAction";
function* getAllStudents() {
  try {
    const res = yield call(apiData);
    yield put(successGetStudent(res));
  } catch (e) {
    console.log("error");
  }
}

export function* watcherGetAllStudents() {
  yield takeLatest("GET_ALL_STUDENTS", getAllStudents);
}
export const apiData = async () => {
  const apiRes = await fetchAllStudents();
  let data = [];
  apiRes.forEach((item) => {
    data.push(item.data());
  });
//   console.log(data)
  return data;
};
