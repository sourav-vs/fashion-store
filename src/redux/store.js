import { configureStore } from "@reduxjs/toolkit";
import productReducer from './slices/productSlice';
import wishlistReducer from './slices/wishlistSlice';

const store = configureStore({
    reducer: {
        product: productReducer,
        wishList: wishlistReducer
    }
})

export default store;