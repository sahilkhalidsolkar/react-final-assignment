import { createSlice } from "@reduxjs/toolkit";


export const errorSlice = createSlice({
    name: 'error',
    initialState: {
        error: [],
    },
    reducers: {
        addError: (state, action) => {
            state.error.push(action.payload)
        },
        removeError: (state, action) => {
            let newErrList = state.error.filter(item => item.id !== action.payload)
            state.error = newErrList
        },

    }
})

export const {
    addError,
    removeError,

} = errorSlice.actions

export default errorSlice.reducer