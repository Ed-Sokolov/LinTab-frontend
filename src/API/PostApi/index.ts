import {createAsyncThunk} from "@reduxjs/toolkit";
import {instance} from "../Instance/instance";
import axios from "axios";
import {PostType} from "../../Types/Post/PostType";

export const getPosts = createAsyncThunk<Array<PostType>, undefined, {rejectValue:any}>(
    'posts/index',
    async (_, {rejectWithValue}) => {
        try {
            const response = await instance.get('/api/posts');

            return response.data.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return rejectWithValue(error);
            }
        }
    }
)

export const getPopularPosts = createAsyncThunk<Array<PostType>, undefined, {rejectValue:any}>(
    'posts/popular/index',
    async (_, {rejectWithValue}) => {
        try {
            const response = await instance.get('/api/posts/popular');

            return response.data.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return rejectWithValue(error);
            }
        }
    }
)

export const createPost = createAsyncThunk<number | any, any, { rejectValue: any }>(
    'posts/create',
    async (data, {rejectWithValue}) => {
        try {
            const response = await instance.post('/api/posts', data);

            return (response.data.data as PostType).id;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return rejectWithValue(error.response?.data);
            }
        }
    }
)