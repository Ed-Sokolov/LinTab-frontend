import {createAsyncThunk} from "@reduxjs/toolkit";
import {instance} from "../Instance/instance";
import axios from "axios";
import {updateUser} from "../../Store/User/UserSlice";

export const updateAbout = createAsyncThunk<any, any, {rejectValue: any}>(
    'settings/about',
    async(data, {rejectWithValue}) => {
        try {
            await instance.patch('/api/settings/about', data);
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return rejectWithValue(error.response?.data);
            }
        }
    }
)

export const updateAvatar = createAsyncThunk<any, any, {rejectValue: any}>(
    'settings/avatar',
    async (data, {rejectWithValue, dispatch}) => {
        try {
            const formData = new FormData();

            formData.append('avatar', data.avatar);
            formData.append('_method', 'PATCH');

            const response = await instance.post('/api/settings/avatar', formData);

            dispatch(updateUser(response.data.data));

            return response.data.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return rejectWithValue(error.response?.data);
            }
        }
    }
)