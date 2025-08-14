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
        updateCart: (state, action) => {
            const { id,quantity } = action.payload;
            const itemIndex = state.findIndex(item => item.id === id);
            // If the product exists, update its quantity
            if (itemIndex !== -1) {
                state[itemIndex].quantity = quantity;
            }

        },
        removeFromCart: (state, action) => {    
            const itemIndex = state.findIndex((item) => item.id === action.payload.id);
            if (itemIndex >= 0) {
                if (state[itemIndex].quantity > 20) {
                    state[itemIndex].quantity -= 1;
                } else {
                    state.splice(itemIndex, 1);
                }
            }
        }
    }
})

export const { addToCart, updateCart, removeFromCart } = Cart.actions;
export default Cart.reducer;