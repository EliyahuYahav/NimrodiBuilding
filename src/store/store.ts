import { configureStore } from "@reduxjs/toolkit";
import  AuthReducer  from "./floorreducer";
import  RoleReducer  from "./rolereducer";

export const store =  configureStore({
    reducer:{
        floorAccess:AuthReducer,
        role: RoleReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;