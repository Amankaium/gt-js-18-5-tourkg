import { createSlice } from '@reduxjs/toolkit';

export const modeSlice = createSlice({
    name: "mode",
    initialState: {
        current: "day",
    },
    reducers: {
        changeMode: (state) => {
            state.current = state.current === "day" ? "night" : "day"
        }
    }
})

export const { changeMode } = modeSlice.actions
export default modeSlice.reducer