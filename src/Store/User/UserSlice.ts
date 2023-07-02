import {createSlice} from "@reduxjs/toolkit";
import {UserType} from "../../Types/User/UserType";

const initialState = {
    user: null as UserType | null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {}
})

export default userSlice.reducer;