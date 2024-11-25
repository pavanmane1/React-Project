import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://192.168.1.38:8082/api';

// Fetch currencies
export const fetchCurrencies = createAsyncThunk(
    'currency/fetchCurrencies',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${BASE_URL}/getcurrency`);
            return response.data;
        } catch (error) {
            // Handle errors and return a custom error message
            return rejectWithValue(error.response ? error.response.data : error.message);
        }
    }
);

// Add new currency
export const addCurrency = createAsyncThunk(
    'currency/addCurrency',
    async (currencyData, { rejectWithValue }) => {
        try {
            await axios.post(`${BASE_URL}/addcurrency`, currencyData);
            return currencyData;
        } catch (error) {
            // Handle errors and return a custom error message
            return rejectWithValue(error.response ? error.response.data : error.message);
        }
    }
);

// Edit currency
export const editCurrencyapi = createAsyncThunk(
    'currency/editCurrency',
    async (updatedData, { rejectWithValue }) => {
        try {
            const response = await axios.put(`${BASE_URL}/updatecurrency`, updatedData);
            return response.data; // Assuming response returns the updated currency data
        } catch (error) {
            // Handle errors and return a custom error message
            return rejectWithValue(error.response ? error.response.data : error.message);
        }
    }
);
export const deleteCurrency = createAsyncThunk('currency/deleteCurrency', async (currencyId, { rejectWithValue }) => {
    try {
        const response = await axios.delete(`${BASE_URL}/deletecurrency?id=${currencyId}`)
        return response.data
    } catch (e) {
        return rejectWithValue(error.response ? error.response.data : error.message)
    }
})

//updatecurrency
//deletecurrency
const currencySlice = createSlice({
    name: 'currency',
    initialState: {
        currencies: [],
        status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
        error: null,
        addCurrencyError: null,
        deleteCurrencyError: null,
        editCurrencyError: null,
        CurrencySelectionData: {
            selectedCurrencyCode: '',
            selectedCurrencySymbol: '',
        },

        editCurrencydata: {
            id: null,
            currency: null,
            symbol: null,
            showpopup: false
        },
        deleteCurrencyData: {
            currencyId: null,
            showDeletePopup: false
        }

    },
    reducers: {
        // Optional: You can add synchronous actions here if needed (e.g., resetting errors)
        resetErrors: (state) => {
            state.addCurrencyError = null;
            state.editCurrencyError = null;
            state.deleteCurrencyError = null;
        },
        editSelectedCurrency(state, action) {
            state.editCurrencydata = {
                id: action.payload.id,
                currency: action.payload.currency,
                symbol: action.payload.symbol,
                showpopup: action.payload.showpopup
            };
        },
        selectCurrencyData(state, action) {
            state.CurrencySelectionData = {
                selectedCurrencyCode: action.payload.selectedCurrencyCode,
                selectedCurrencySymbol: action.payload.selectedCurrencySymbol,
            }
        },
        deleteSelectedCurrency(state, action) {
            state.deleteCurrencyData = {
                currencyId: action.payload.currencyId,
                showDeletePopup: action.payload.showDeletePopup
            };
        },
        resetPopups(state) {
            state.editCurrencydata.showpopup = false;
            state.deleteCurrencyData.showDeletePopup = false;
        },
    },
    extraReducers: (builder) => {
        builder
            // Fetch currencies
            .addCase(fetchCurrencies.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchCurrencies.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.currencies = action.payload;
            })
            .addCase(fetchCurrencies.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload || 'Failed to fetch currencies'; // Handle custom error message
            })

            // Add currency
            .addCase(addCurrency.pending, (state) => {
                state.addCurrencyError = null; // Reset error when adding currency
            })
            .addCase(addCurrency.fulfilled, (state, action) => {
                state.currencies.push(action.payload); // Add the new currency to the list
            })
            .addCase(addCurrency.rejected, (state, action) => {
                state.addCurrencyError = action.payload || 'Failed to add currency'; // Set error when addCurrency fails
            })

            // Edit currency
            .addCase(editCurrencyapi.pending, (state) => {
                state.editCurrencyError = null;

            })
            .addCase(editCurrencyapi.fulfilled, (state, action) => {
                state.status = 'succeeded';

            })
            .addCase(editCurrencyapi.rejected, (state, action) => {
                state.editCurrencyError = action.payload || "failed to edit currency";
            })
            // delete currency
            .addCase(deleteCurrency.pending, (state) => {
                state.deleteCurrencyError = null;

            })
            .addCase(deleteCurrency.fulfilled, (state, action) => {
                state.status = 'succeeded';

            })
            .addCase(deleteCurrency.rejected, (state, action) => {
                state.deleteCurrencyError = action.payload || "failed to edit currency";
            })
    },
});

export const { resetErrors, editSelectedCurrency, selectCurrencyData, deleteSelectedCurrency, resetPopups } = currencySlice.actions;

export default currencySlice.reducer;
