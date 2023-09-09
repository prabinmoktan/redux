import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { productsData } from "../services/axios.service";
import { useDispatch } from "react-redux";
import { productsCardInterface } from "../interface/global.interfce";



const initialState = {
    carts : localStorage.getItem('carts')? 
    JSON.parse(localStorage.getItem('carts'))
    : [],
    // items : productsData,
    totalQuantity : 0,
    totalPrice : 0
}




const cartSlice = createSlice ({
    name: "carts",
    initialState,
    reducers : {
        addToCart(state, action){
            state.carts.push(action.payload)
            localStorage.setItem("carts", JSON.stringify(state.carts))
        },
        removeFromCart(state,action) {
            
            const itemId = action.payload;
            state.carts = state.carts.filter((item)=> item.id !== itemId)
            
        }, 
        clearCart(state){
            console.log(state)
            state.carts = []
            localStorage.removeItem('carts')

        }
    }
})
export const {addToCart, removeFromCart, clearCart} = cartSlice.actions;
export default cartSlice.reducer;