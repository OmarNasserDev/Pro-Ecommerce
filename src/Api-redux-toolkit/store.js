import { configureStore } from '@reduxjs/toolkit'
import categorySlice from './Slices/CategoriesSlice.js'
import ProductsSlice from './Slices/ProductsSlice.js'

const store = configureStore({
    reducer: {
        category: categorySlice.reducer,
        products: ProductsSlice.reducer
    },
    devTools: true
})

export default store