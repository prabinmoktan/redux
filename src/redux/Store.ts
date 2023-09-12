import {  combineReducers, configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import {  FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import DataSlice from "./DataSlice";



const persistConfig = {
    key : 'carts-data',
    version : 1,
    storage
}
const reducer = combineReducers({
    carts: CartSlice, 
    product : DataSlice
})

const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({
    reducer: persistedReducer, 
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    
})