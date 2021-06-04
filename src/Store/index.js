import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSagas from "./rootSagas";
import {authReducer} from "./reducers/authReducer";
const sagaMiddleware = createSagaMiddleware();
const rootReducers = combineReducers({
  authReducer: authReducer,
});

export const store = createStore(rootReducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSagas);
