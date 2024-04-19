import { createSlice } from '@reduxjs/toolkit'
import { getAllOurProducts } from '../actions'

const initialState = {
    isLoading: true,
    error: '',
    data: []
}

const OurProductsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllOurProducts.pending, (state, action) => {
                state.isLoading = true
                state.error = ''
            })
            .addCase(getAllOurProducts.fulfilled, (state, action) => {
                state.isLoading = false
                state.error = ''
                state.data = action.payload
            })
            .addCase(getAllOurProducts.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    }

})

export default OurProductsSlice