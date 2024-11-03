import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/slice";
export const store = configureStore({
    //we can have multiple rducer in single store
    reducer:todoReducer,
})
