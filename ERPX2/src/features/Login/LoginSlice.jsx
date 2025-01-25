import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";

const authentication = createAsyncThunk('login/authentication', async (LoginDetails, { rejectWithvalue }) => {
    try {
        const response = await axios.post("http:192.168.7.16:8081/api/auth/userlogin", LoginDetails)
        return response.data
    }
    catch (error) {
        return rejectWithvalue(error.response ? error.response.data : error.message)
    }

})


const loginslice = createSlice({
    name: "login",
    initialState: {
        LoginDetails: [],
        status: 'idel',
        error: null
    },
    extraReducers: ((builder) => {
        builder
            .addCase(authentication.pending, (state, action) => {
                state.status = 'loading'

            }).addCase(authentication.fulfilled, (state, action) => {
                state.status = 'successed'
                state.LoginDetails = action.payload
            }).addCase(authentication.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload || 'Failed to authenticate';

            })
    })
})