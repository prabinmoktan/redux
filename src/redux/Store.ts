import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import thunk from "redux-thunk";



export const store = configureStore({
    reducer:{
       carts: CartSlice
    }
}, applyMiddleware(thunk))