import { applyMiddleware, compose, createStore } from "redux";
import counterReducer from "./counter/counterReducer";
import logger from "redux-logger";

const store = createStore(counterReducer, compose(applyMiddleware(logger)));

export default store;
