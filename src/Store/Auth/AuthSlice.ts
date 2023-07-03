import {createSlice} from "@reduxjs/toolkit";
import {login} from "../../API/AuthApi";

const initialState = {
    isAuth: false as boolean,
    profileId: null as number | null
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
    }
})

export default authSlice.reducer;