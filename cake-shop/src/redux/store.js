import { createStore } from "redux";
import { cakeReducer } from "./Reducers/cakeReducer";

export const store = createStore(cakeReducer);
