import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    isAuth: false as boolean,
    profileId: null as number | null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {}
})

export default authSlice.reducer;