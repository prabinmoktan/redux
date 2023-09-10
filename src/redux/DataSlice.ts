import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { productsCardInterface } from "../interface/global.interfce"

const initialState = {
    product : []
    

}
 export const dataFetch = createAsyncThunk('product, dataFetch',
 async() => {
    const response = await axios.get('https://fakestoreapi.com/products')
    console.log(response.data)
    return response.data
 })

  const dataSlice = createSlice({
    name : 'product' ,
    initialState,
    reducers : {},
    extraReducers : {
        [dataFetch.pending] : (state) => {
            state.status = 'loading';
        },
        [dataFetch.fulfilled] : ( state, action ) => {
            state.status = 'resolved';
            state.item = action.payload
        },
        [dataFetch.rejected]:  (state : productsCardInterface, action ) => {
            state.status = 'failed';
            state.error = action. payload
        }
    }
 })
 export default dataSlice.reducer
