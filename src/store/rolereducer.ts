import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "../types/type";
import Person from "../data/roles.json" 


export const RoleSlice = createSlice({
    initialState,
    name: "RoleFloor",
    reducers: {
        setRole: (state, actions:PayloadAction<number>)=>{
        state.person = Person[actions.payload]
      }
    },
  });
  
  export const { setRole } = RoleSlice.actions;
  export default RoleSlice.reducer;