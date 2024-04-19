import { configureStore } from '@reduxjs/toolkit'
import categorySlice from './Slices/CategoriesSlice.js'
import ProductsSlice from './Slices/ProductsSlice.js'
import OurProductsSlice from './Slices/OurProductsSlice.js'

const store = configureStore({
    reducer: {
        category: categorySlice.reducer,
        products: ProductsSlice.reducer,
        ourProducts: OurProductsSlice.reducer
    },
    devTools: true
})

export default store