import { createSlice } from "@reduxjs/toolkit";

const initialState = {isLoading: true};

const SpinnerSlice = createSlice({
    name: "spinner",
    initialState,
    reducers:{
        showSpinner:(state)=>{
            console.log("Spinner state before toggle: ", state.isLoading);
            state.isLoading = !state.isLoading;
        }
    }
})

export const { showSpinner } = SpinnerSlice.actions;
export default SpinnerSlice.reducer;