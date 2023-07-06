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