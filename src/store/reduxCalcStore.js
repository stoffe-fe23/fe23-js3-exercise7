import { configureStore } from '@reduxjs/toolkit';
import reduxCalcReducer from "../slice/reduxCalcSlice";


const store = configureStore({
    reducer: {
        calculator: reduxCalcReducer,
    }
});

export default store;