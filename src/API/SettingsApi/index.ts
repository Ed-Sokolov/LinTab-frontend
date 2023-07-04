import {createAsyncThunk} from "@reduxjs/toolkit";
import {instance} from "../Instance/instance";

export const updateAbout = createAsyncThunk<any, any, {rejectValue: any}>(
    'settings/about',
    async(data, {rejectWithValue}) => {
        const response = await instance.patch('/api/settings/about', data);

        console.log(response);
    }
)