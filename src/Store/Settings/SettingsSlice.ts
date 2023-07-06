import {createSlice} from "@reduxjs/toolkit";
import {updateAbout} from "../../API/SettingsApi";

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
    }
})

export default settingsSlice.reducer;