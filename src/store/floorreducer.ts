import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "../types/type";


export const AuthSlice = createSlice({
    initialState,
    name: "AuthFloor",
    reducers: {
      changeAccess: (state, actions:PayloadAction<number>)=>{
        state.floorAccess[actions.payload] =  !state.floorAccess[actions.payload]
      }
    },
  });
  
  export const { changeAccess } = AuthSlice.actions;
  export default AuthSlice.reducer;