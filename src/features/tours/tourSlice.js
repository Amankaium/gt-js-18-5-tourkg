import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

export const tourSlice = createSlice({
    name: "tours",
    initialState: {
        data: [],
    },
    reducers: {
        getData: (state, action) => {
            state.data = action.payload
        },
    }
})

export const { getData } = tourSlice.actions
export default tourSlice.reducer