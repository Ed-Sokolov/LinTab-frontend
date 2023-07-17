import {createSlice} from "@reduxjs/toolkit";
import {updateAbout, updateAvatar} from "../../API/SettingsApi";

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
            .addCase(updateAvatar.fulfilled, state => {
                state.isLoading = false;
                state.isError = false;
            })
            .addCase(updateAvatar.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;

                throw action.payload;
            })
    }
})

export default settingsSlice.reducer;