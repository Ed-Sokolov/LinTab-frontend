import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {UserType} from "../../Types/User/UserType";
import {getUser} from "../../API/UserApi";

const initialState = {
    user: null as UserType | null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateUser(state, action: PayloadAction<UserType>) {
            state.user = action.payload;
        }
    },
    extraReducers: (builder) : void => {
        builder
            .addCase(getUser.fulfilled, (state, action) => {
                state.user = action.payload;
            })
    }
})

export const { updateUser } = userSlice.actions;

export default userSlice.reducer;