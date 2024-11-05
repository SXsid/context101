import { configureStore } from "@reduxjs/toolkit"
import CounterReducer from "../features/Counterslice"
import  postReducer, { postSlice } from "../features/PostApiSlice"

export const store = configureStore({
    reducer:{
        //multiple slices in same store 
        counter:CounterReducer,
        [postSlice.reducerPath]:postReducer
    },
    middleware:(getDefaultMiddleware)=>{
        return getDefaultMiddleware().concat(postSlice.middleware)
    },
})

// types of the state need to be send
//1) to get the type of state store in state(for selectrs)
export type RootState=ReturnType<typeof store.getState>
//2)used when aciton async work(for actions)
export type AppDispatch = typeof store.dispatch