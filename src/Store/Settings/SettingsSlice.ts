import {createSlice} from "@reduxjs/toolkit";
import {changePassword, destroyAvatar, destroyUser, updateAbout, updateAvatar} from "../../API/SettingsApi";

const settingsSlice = createSlice({
    name: "settings",
    initialState: {
        isLoading: false as boolean,
        isError: false as boolean
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(updateAbout.pending, state => {
                state.isLoading = true;
            })
            .addCase(updateAbout.fulfilled, state => {
                state.isLoading = false;
                state.isError = false;
            })
            .addCase(updateAbout.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;

                throw action.payload;
            })
            .addCase(updateAvatar.pending, state => {
                state.isLoading = true;
            })
            .addCase(updateAvatar.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
            })
            .addCase(updateAvatar.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;

                throw action.payload;
            })
            .addCase(destroyAvatar.pending, state => {
                state.isLoading = true;
            })
            .addCase(destroyAvatar.fulfilled, state => {
                state.isLoading = false;
                state.isError = false;
            })
            .addCase(destroyAvatar.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;

                throw action.payload;
            })
            .addCase(changePassword.pending, state => {
                state.isLoading = true;
            })
            .addCase(changePassword.fulfilled, state => {
                state.isLoading = false;
                state.isError = false;
            })
            .addCase(changePassword.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;

                throw action.payload;
            })
            .addCase(destroyUser.pending, state => {
                state.isLoading = true;
            })
            .addCase(destroyUser.fulfilled, state => {
                state.isLoading = false;
                state.isError = false;
            })
            .addCase(destroyUser.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;

                throw action.payload;
            })
    }
})

export default settingsSlice.reducer;