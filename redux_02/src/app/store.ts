import { configureStore } from "@reduxjs/toolkit"


export const store = configureStore({
    reducer:{}
})

// types of the state need to be send

export type RootState=ReturnType<typeof store.getState>
