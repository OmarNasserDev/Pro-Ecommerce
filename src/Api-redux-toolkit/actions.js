import { createAsyncThunk, isRejectedWithValue } from '@reduxjs/toolkit'
import axios from 'axios'

export const getAllCategories = createAsyncThunk('category/getAllCategories', async (_, { rejecteWithValue }) => {
    try {

        const response = await axios.get('https://fakestoreapi.com/products/categories')
        return response.data
    } catch (error) {
        return rejecteWithValue(error)
    }
})

export const getAllProducts = createAsyncThunk('products/getAllProducts', async (_, { rejectedWithValue }) => {
    try {

        const response = await axios.get('https://fakestoreapi.com/products')
        return response.data

    } catch (error) {
        return rejectedWithValue(error)
    }
})

export const getAllOurProducts = createAsyncThunk('products/getAllOurProducts', async (_, { rejectedWithValue }) => {
    try {
        const response = await axios.get('http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')

        return response.data
    } catch (error) {
        return rejectedWithValue(error)
    }

})


export const getSingleProduct = createAsyncThunk('products/getSingleProduct', async (id, { rejectedWithValue }) => {
    try {

        const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
        return response.data
    } catch (error) {
        return rejectedWithValue(error)
    }
})