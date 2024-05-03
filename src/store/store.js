import { configureStore } from "@reduxjs/toolkit";
import dashboardReducer from './dashboard/dashboardSlice'
import errorReducer from './errors/errorSlice'
export default configureStore({
    reducer: {
        dashboard: dashboardReducer,
        errors: errorReducer
    }
})