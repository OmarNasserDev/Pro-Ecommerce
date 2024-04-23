import { configureStore } from '@reduxjs/toolkit'
import categorySlice from './Slices/CategoriesSlice.js'
import ProductsSlice from './Slices/ProductsSlice.js'
import OurProductsSlice from './Slices/OurProductsSlice.js'
import singleProductSice from './Slices/SingleProductSlice.js'

const store = configureStore({
    reducer: {
        category: categorySlice.reducer,
        products: ProductsSlice.reducer,
        ourProducts: OurProductsSlice.reducer,
        singleProduct: singleProductSice.reducer,
    },
    devTools: true
})

export default store