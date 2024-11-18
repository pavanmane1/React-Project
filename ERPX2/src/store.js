import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slice/slice';
import paginationReducer from './slice/PaginationSlice'
import currencyReducer from './slice/currencySlice.jsx'
const store = configureStore({
    reducer: {
        pagination: paginationReducer,
        currency: currencyReducer,
    },
});

export default store;
