import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Router from "./Router";
import "antd/dist/antd.css";
import firebase from "firebase/app";
import { Provider } from "react-redux";
import {store} from './Store'
firebase.initializeApp({
  apiKey: "AIzaSyAoYfjGKN6fchEcP8WwbB85r74mOrdUcBA",
  authDomain: "recruitment-system-24.firebaseapp.com",
  projectId: "recruitment-system-24",
  storageBucket: "recruitment-system-24.appspot.com",
  messagingSenderId: "887021311206",
  appId: "1:887021311206:web:46bf7c20fc6fa8bf5c9727",
  measurementId: "G-HDVB0CTK05",
});
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
