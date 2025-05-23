import { createSlice } from "@reduxjs/toolkit";

const toggleSlice=createSlice({
    name:'toggle',
    initialState:{
        showSignUpForm:false
    },
    reducers:{
        showSignUp:(state,action)=>{
            state.showSignUpForm=!state.showSignUpForm
        },
    }
})
export const {showSignUp}=toggleSlice.actions;
export default toggleSlice.reducer;