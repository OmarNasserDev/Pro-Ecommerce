import { createSlice } from '@reduxjs/toolkit'
import { getAllProducts } from '../actions.js';


const initialState = {
    isLoading: true,
    error: '',
    data: []
}
const ProductsSlice = createSlice({
    name: 'products',
    initialState,

    extraReducers: (builder) => {
        builder
            .addCase(getAllProducts.pending, (state, action) => {
                state.isLoading = true
                state.error = ''
            })
            .addCase(getAllProducts.fulfilled, (state, action) => {
                state.isLoading = false
                state.error = ''
                state.data = action.payload
            })
            .addCase(getAllProducts.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    }
})



export default ProductsSlice;