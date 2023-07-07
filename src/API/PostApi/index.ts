import {createAsyncThunk} from "@reduxjs/toolkit";
import {instance} from "../Instance/instance";
import axios from "axios";

export const createPost = createAsyncThunk<any, any, { rejectValue: any }>(
    'posts/create',
    async (data, {rejectWithValue}) => {
        try {
            const response = await instance.post('/api/posts', data);

            console.log(response);
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log(error.response);
            }
        }
    }
)