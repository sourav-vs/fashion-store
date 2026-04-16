import { createSlice } from "@reduxjs/toolkit";


const wishlistSlice=createSlice({
   name:"wishlist",
   initialState:[],
   reducers:{

    addToWishlist:(state,action)=>{
        state.push(action.payload)
        
    },
    removeWishlist:(state,action)=>{
        return state.filter(pro=>pro.id!=action.payload)
    }
   }

})

export const {addToWishlist,removeWishlist} =wishlistSlice.actions
export default wishlistSlice.reducer



