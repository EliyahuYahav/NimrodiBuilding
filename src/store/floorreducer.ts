import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "../types/type";


export const AuthSlice = createSlice({
    initialState,
    name: "AuthFloor",
    reducers: {
      changeAccess: (state, actions:PayloadAction<number>)=>{
        state.access[actions.payload].access = true
      }
    },
  });
  
  export const { changeAccess } = AuthSlice.actions;
  export default AuthSlice.reducer;