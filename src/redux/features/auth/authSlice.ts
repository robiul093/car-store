import { createSlice } from "@reduxjs/toolkit";


export type TUser = {
    name: string;
    email: string;
    id: string;
    role: string;
    iat: number;
    exp: number;
    isActive?: boolean
}

type TAuthState = {
    user: null | TUser,
    token: null | string
}

const initialState: TAuthState = {
    user: null,
    token: null,
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state, actions) => {
            const { user, token } = actions?.payload;
            state.user = user;
            state.token = token;
        },
        logOut: (state) => {
            state.user = null;
            state.token = null;
        }
    }
});


export const { setUser, logOut } = authSlice.actions;

export default authSlice.reducer;