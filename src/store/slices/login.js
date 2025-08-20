import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id: 1, user:"admin", email: "admin@gmail.com", password: "admin123"}
];

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers:{
        addUser: (state, action) => {
            const { user, email, password} = action.payload;
            const newUser = {
                id: initialState.length + 1,
                user:user,
                email:email,
                password:password
            }
            state.push(newUser);
        }
    }
})

export const { addUser} = loginSlice.actions;
export default loginSlice.reducer;