import { configureStore } from "@reduxjs/toolkit";
import viewProductsReducer from "@/store/slices/ViewProducts"

export const store = configureStore({
    reducer: {
        viewProducts: viewProductsReducer, // matches the slice name in ViewProducts.js
    }
})