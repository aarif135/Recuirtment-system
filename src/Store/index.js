import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSagas from "./rootSagas";
import { authReducer } from "./reducers/authReducer";
import { studentReducer } from "./reducers/userReducer";
const sagaMiddleware = createSagaMiddleware();
const rootReducers = combineReducers({
  authReducer: authReducer,
  studentReducer: studentReducer,
});

export const store = createStore(rootReducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSagas);
