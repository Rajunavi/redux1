import { combineReducers } from "redux";
import { productReduser } from "./productReduser";

export const combineReduser = combineReducers({
    productR:productReduser
})