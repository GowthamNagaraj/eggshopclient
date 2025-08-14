import { configureStore } from "@reduxjs/toolkit";
import viewProductsReducer from "@/store/slices/ViewProducts"
import CartReducer from "@/store/slices/Cart";

export const store = configureStore({
    reducer: {
        viewProducts: viewProductsReducer,
        cart: CartReducer
    }
})