import {createAsyncThunk} from "@reduxjs/toolkit";
import {instance} from "../Instance/instance";
import axios from "axios";
import {PostType} from "../../Types/Post/PostType";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

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

export const getPost = createAsyncThunk<PostType, number, {rejectValue: any}>(
    'posts/show',
    async (id, {rejectWithValue}) => {
        try {
            const response = await instance.get(`/api/posts/${id}`);

            return response.data.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return rejectWithValue(error.response?.data);
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

export const updatePost = createAsyncThunk<PostType, any, {rejectValue: any}>(
    'posts/update',
    async (data, {rejectWithValue}) => {
        try {
            const {id, postData} = data;

            const response = await instance.patch(`/api/posts/${id}`, postData);

            return response.data.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return rejectWithValue(error.response);
            }
        }
    }
)

export const destroyPost = createAsyncThunk<any, number, {rejectValue: any}>(
    'posts/destroy',
    async (id, {rejectWithValue}) =>  {
        try {
            const response = await instance.delete(`/api/posts/${id}`);

            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return rejectWithValue(error.response);
            }
        }
    }
)