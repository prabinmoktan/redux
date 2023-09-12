import {  createSlice } from "@reduxjs/toolkit";
import { productsCardInterface } from "../interface/global.interfce";
// import { productsData } from "../services/axios.service";
// import { useDispatch } from "react-redux";




const initialState = {
    carts :  [],
    // items : productsData,
    totalQuantity : 0,
    totalPrice : 0
}




const cartSlice = createSlice ({
    name: "carts",
    initialState,
    reducers : {
        addToCart(state, action){
            const addQuantity = state.carts.findIndex((cart)=>cart.id === action.payload.id);
            if(addQuantity >= 0){
                state.carts[find].quantity + 1;
            }else {
                state.carts.push(action.payload )
            }
           
            
        },
        removeFromCart(state,action) {
            
            const itemId = action.payload;
            state.carts = state.carts.filter((item : productsCardInterface)=> item.id !== itemId)
            // localStorage.setItem('carts', JSON.stringify(state.carts));
            
        }, 
        clearCart(state){
            // console.log(state)
            state.carts = []
            // localStorage.removeItem('carts')

        }
    }
})
export const {addToCart, removeFromCart, clearCart} = cartSlice.actions;
export default cartSlice.reducer;