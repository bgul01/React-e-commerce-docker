import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const apiUrl = 'http://localhost:3001';

export const fetchDataAsync = createAsyncThunk('data/fetchData', async () => {
    const response = await axios.get(`${apiUrl}/product`);
    return response.data
})


const dataSlice = createSlice({

    name: 'data',

    initialState: {

        items: [],
        loading: false,
        error: null,
    },

    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchDataAsync.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchDataAsync.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload
            })
            .addCase(fetchDataAsync.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message
            })




    }



})
export default dataSlice.reducer;