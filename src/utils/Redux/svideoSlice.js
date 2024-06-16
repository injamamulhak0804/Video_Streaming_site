import { createSlice } from "@reduxjs/toolkit";

const sVideoSlice = createSlice({
    name: "sVideo",
    initialState: {
        data: {}
    },
    reducers: {
        addItems: (state, action) => {
            state.data = action.payload
        }
    }
})

export default sVideoSlice.reducer;
export const { addItems } = sVideoSlice.actions;

