import { createSlice } from "@reduxjs/toolkit";


export const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState: {
        data: [],
        updateDataValues: null
    },
    reducers: {
        addData: (state, action) => {
            state.data = [action.payload, ...state.data]
            // state.data.push(action.payload)
        },
        loadData: (state, action) => {
            state.data = action.payload
        },
        updateData: (state, action) => {
            const updatedArr = state.data.map(item => {
                if (item.id === action.payload.id) {
                    return action.payload
                } else {
                    return item
                }
            })
            state.data = updatedArr
        },
        updateDataFields: (state, action) => {
            state.updateDataValues = action.payload
        },
        deleteData: (state, action) => {
            const filteredData = state.data.filter(item => item.id !== action.payload)
            state.data = filteredData
        }
    }
})

export const {
    addData,
    loadData,
    updateData,
    updateDataFields,
    // clearUpdateDataFields,
    deleteData,
} = dashboardSlice.actions

export default dashboardSlice.reducer