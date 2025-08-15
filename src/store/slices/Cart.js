import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const Cart = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const itemIndex = state.findIndex((item) => item.id === action.payload.id);
            if (itemIndex >= 0) {
                state[itemIndex].quantity += action.payload.quantity;
            } else {
                const tempProduct = { ...action.payload, quantity: action.payload.quantity };
                state.push(tempProduct);
            }
        },
        removeFromCart: (state, action) => {    
            const itemIndex = state.filter((item) => item.id !== action.payload.id);
            state.splice(0, state.length, ...itemIndex);
        }
    }
})

export const { addToCart, removeFromCart } = Cart.actions;
export default Cart.reducer;