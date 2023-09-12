import { createAsyncThunk, createSlice, isFulfilled } from "@reduxjs/toolkit"
import axios from "axios"
import { productsCardInterface } from "../interface/global.interfce"

const initialState = {
    product : [],
    loading : false,
    error : ''
    

}
 export const dataFetch = createAsyncThunk('product, dataFetch',
 async() => {
    const response = await axios.get('https://fakestoreapi.com/products')
    // console.log(response.data)
    return response.data
 })

  const dataSlice = createSlice({
    name : 'product' ,
    initialState,
    reducers : {},
    extraReducers : builder  => {
        builder.addCase(dataFetch.pending, (state)=>{
            state.loading=true
        })
        builder.addCase(dataFetch.fulfilled, (state, action)=>{
            state.loading=false
            state.product = action.payload
            state.error = ''
     })
     builder .addCase(dataFetch.rejected,(state)=>{
        state.loading = false
        state.product = []
        
     })
    
 }
})
 export default dataSlice.reducer
