import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./User/UserSlice";
import authReducer from "./Auth/AuthSlice";

const store = configureStore({
    reducer: {
        user: userReducer,
        auth: authReducer
    }
})

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;