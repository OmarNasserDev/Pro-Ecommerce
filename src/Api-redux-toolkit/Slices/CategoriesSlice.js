import { createSlice } from '@reduxjs/toolkit'

import { getAllCategories } from '../actions.js'

const initialState = {
    isLoading: true,
    error: '',
    data: []
}


const categorySlice = createSlice({
    name: 'category',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getAllCategories.pending, (state, action) => {
            state.isLoading = true
            state.error = ''
        })
        builder.addCase(getAllCategories.fulfilled, (state, action) => {
            state.isLoading = false
            state.error = ''
            state.data = action.payload
        })
        builder.addCase(getAllCategories.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })

    }
})



export default categorySlice