import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const userInfo = JSON.parse(localStorage.getItem("users"));
export const RegisterWithEmail = async (email, password, userInfo, cb) => {
  const db = firebase.firestore();
  delete userInfo.password;
  try {
    const createUser = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    await db
      .collection("users")
      .doc(createUser.user.uid)
      .set({ ...userInfo, userId: createUser.user.uid });
    cb();
    return createUser;
  } catch (e) {
    alert("Could not create user right now!");
    return "Could not create user right now!";
  }
};

export const loginWithEmail = async (email, password) => {
  const db = firebase.firestore();

  const loginUser = await firebase
    .auth()
    .signInWithEmailAndPassword(email, password);
  const userInfo = await db.collection("users").doc(loginUser.user.uid).get();
  return userInfo.data();
};

export const postAJob = async (data, cb, users) => {
  const db = firebase.firestore();
  try {
    const postJob = await db
      .collection("jobs")
      .add({ ...data, userId: users.userId });
    cb();
    return postJob;
  } catch (e) {
    return "Unable to post a new job";
  }
};

export const getMyJob = async (uId) => {
  const db = firebase.firestore();
  const allJobs = await db.collection("jobs").where("userId", "==", uId);
  return allJobs;
};

export const fetchAllStudents = async () => {
  const db = firebase.firestore();
  const allStudents = await db.collection("studentDetail");
  return allStudents;
};

export const postStudentDetail = async (userData, cb) => {
  const db = firebase.firestore();
  const updatedStudent = await db.collection("studentDetail").add(userData);
  cb();
  return updatedStudent;
};

export const fetchAllJobs = async () => {
  const db = firebase.firestore();
  const fetchList = await db.collection("jobs");
  return fetchList;
};
export const logout = async () => {
  firebase.auth().signOut();
  localStorage.removeItem("users");
};
export const checkIfExist = async (user) => {
  const db = firebase.firestore();

  const check = await db
    .collection("studentDetail")
    .where("userId", "==", user.userId)
    .get();
  return check.empty;
};

export const deleteCompany = async (docId) => {
  const db = firebase.firestore();
  await db
    .collection("jobs")
    .doc(docId)
    .delete()
    .then((docs) => {
      console.log("document deleted successfully");
    });
};

export const deleteStudent = async (docId) => {
  const db = firebase.firestore();
  await db
    .collection("studentDetail")
    .doc(docId)
    .delete()
    .then((docs) => {
      console.log("document deleted successfully");
    });
};
