import {createAsyncThunk} from "@reduxjs/toolkit";
import {instance} from "../Instance/instance";
import axios from "axios";

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
    'settings/avater',
    async (data, {rejectWithValue}) => {
        try {
            const formData = new FormData();

            formData.append('avatar', data.avatar);
            formData.append('_method', 'PATCH');

            const response = await instance.post('/api/settings/avatar', formData);

            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return rejectWithValue(error.response?.data);
            }
        }
    }
)