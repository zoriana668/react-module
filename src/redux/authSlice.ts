import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAuthState, IUser } from "../../types/auth";

const initialState: IAuthState = {
    isAuthenticated: false,
    user: null,
    token: localStorage.getItem("token") || null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginSuccess(state, action: PayloadAction<{ user: IUser; token: string }>) {
            state.isAuthenticated = true;
            state.user = action.payload.user;
            state.token = action.payload.token;
            localStorage.setItem("token", action.payload.token);
        },
        logout(state) {
            state.isAuthenticated = false;
            state.user = null;
            state.token = null;
            localStorage.removeItem("token");
        },
    },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
