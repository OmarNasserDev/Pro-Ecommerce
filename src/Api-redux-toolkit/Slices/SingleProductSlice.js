import { createSlice } from "@reduxjs/toolkit";
import { getSingleProduct } from "../actions";

const initialState = {
    isLoading: true,
    error: '',
    data: {}
}

const singleProduct = createSlice({
    name: 'singleProduct',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getSingleProduct.pending, (state, action) => {
                state.isLoading = true;
                state.error = '';
            })
            .addCase(getSingleProduct.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
                state.error = ''
                console.log(action.payload);
            })
            .addCase(getSingleProduct.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    }
})

export default singleProduct