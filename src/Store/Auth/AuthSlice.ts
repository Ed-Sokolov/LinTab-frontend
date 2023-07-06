import {createSlice} from "@reduxjs/toolkit";
import {checkAuth, login, logOut, register} from "../../API/AuthApi";

const initialState = {
    isAuth: false as boolean,
    profileId: null as number | null,
    isLoading: false as boolean
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder): void => {
        builder
            .addCase(login.fulfilled, (state, action) => {
                state.isAuth = true;
            })
            .addCase(register.fulfilled, (state, action) => {
                state.isAuth = true;
            })
            .addCase(register.rejected, (state, action) => {
                state.isAuth = false;
                state.isLoading = false;

                throw action.payload;
            })
            .addCase(checkAuth.fulfilled, (state, action) => {
                state.isAuth = true;
                state.profileId = action.payload;
            })
            .addCase(checkAuth.rejected, (state) => {
                state.isAuth = false;
                state.profileId = null;
            })
            .addCase(logOut.fulfilled, (state) => {
                state.isAuth = false;
                state.profileId = null;
            })
    }
})

export default authSlice.reducer;