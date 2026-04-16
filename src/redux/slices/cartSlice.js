import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            const existingProduct = state.find(pro => pro.id === action.payload.id);

            if (existingProduct) {
                existingProduct.quantity += 1;
                existingProduct.totalPrice = existingProduct.quantity * existingProduct.price;
            } else {
                state.push({
                    ...action.payload,
                    quantity: 1,
                    totalPrice: action.payload.price
                });
            }
        },

        incrementQuantity: (state, action) => {
            const existingProduct = state.find(pro => pro.id === action.payload);
            if (existingProduct) {
                existingProduct.quantity++;
                existingProduct.totalPrice = existingProduct.quantity * existingProduct.price;
            }
        },

        decrementQuantity: (state, action) => {
            const existingProduct = state.find(pro => pro.id === action.payload);
            if (existingProduct && existingProduct.quantity > 1) {
                existingProduct.quantity--;
                existingProduct.totalPrice = existingProduct.quantity * existingProduct.price;
            }
        },

        removeCartItem: (state, action) => {
            return state.filter(pro => pro.id !== action.payload);
        },

        emptyCart: () => {
            return [];
        }
    }
});

export const {
    addToCart,
    incrementQuantity,
    decrementQuantity,
    removeCartItem,
    emptyCart
} = cartSlice.actions;

export default cartSlice.reducer;