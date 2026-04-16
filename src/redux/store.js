import { configureStore } from "@reduxjs/toolkit";
import productReducer from './slices/productSlice';
import wishlistReducer from './slices/wishlistSlice';

const store = configureStore({
    reducer: {
        product: productReducer,
        wishlist: wishlistReducer
    }
})

export default store;