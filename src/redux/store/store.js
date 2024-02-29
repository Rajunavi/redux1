import { createStore } from "redux";
import { combineReduser } from "../reducer/combineReduser";

const store = createStore(combineReduser, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


export default store;