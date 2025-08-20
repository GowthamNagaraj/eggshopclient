import { configureStore } from "@reduxjs/toolkit";
import viewProductsReducer from "@/store/slices/ViewProducts"
import CartReducer from "@/store/slices/Cart";
import SpinnerSlice from "@/store/slices/Spinner";
import loginSlice from "@/store/slices/login"

export const store = configureStore({
    reducer: {
        viewProducts: viewProductsReducer,
        cart: CartReducer,
        spinner: SpinnerSlice,
        login: loginSlice
    }
})