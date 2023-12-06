import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const apiUrl = 'http://localhost:3001';


export const fetchDataAsync2 = createAsyncThunk('dataCaro/fetchData', async () => {
    const response = await axios.get(`${apiUrl}/home`);
    return response.data
})


const dataCaro = createSlice({

    name: 'dataCaro',

    initialState: {

        Caroitems: [''],
        loading: false,
        error: null,
    },

    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchDataAsync2.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchDataAsync2.fulfilled, (state, action) => {
                state.loading = false;
                state.Caroitems = action.payload
            })
            .addCase(fetchDataAsync2.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message
            });




    },



});
export default dataCaro.reducer;