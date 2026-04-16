import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProduct=createAsyncThunk('products/fetchProduct',async()=>{

    const result=await axios.get('https://dummyjson.com/products')
    localStorage.setItem("allproducts",JSON.stringify(result.data.products))
    return result.data.products
    
})

const productSlice=createSlice({
    name:'products',
    initialState:{
        loading:false,
        product:[],
        error:'',
        dummyProducts:[]
    },
    reducers:{

        searchProduct(state,actions){
          state.products= state.dummyProducts.filter(item=>item.title.toLowerCase().includes(actions.payload))
        }

    },
    extraReducers:(builder)=>{
        builder.addCase(fetchProduct.fulfilled,(state,action)=>{
            state.loading=false
            state.products=action.payload
            state.dummyProducts=action.payload
            state.error=''
        })
         builder.addCase(fetchProduct.pending,(state,action)=>{
            state.loading=true
            state.products=[]
            state.error=''
        })
         builder.addCase(fetchProduct.rejected,(state,action)=>{
            state.loading=false
            state.products=[]
            state.error='API call failed,please try after some time'
        })
    }
})
export const {searchProduct}=productSlice.actions

export default productSlice.reducer