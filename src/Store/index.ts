import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./User/UserSlice";
import authReducer from "./Auth/AuthSlice";
import settingsReducer from "./Settings/SettingsSlice";
import postReducer from "./Post/PostSlice";

const store = configureStore({
    reducer: {
        user: userReducer,
        auth: authReducer,
        settings: settingsReducer,
        post: postReducer
    }
})

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;