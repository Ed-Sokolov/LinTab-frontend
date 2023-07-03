import {createAsyncThunk} from "@reduxjs/toolkit";
import {instance} from "../Instance/instance";
import axios from "axios";

export const checkAuth = createAsyncThunk<any, undefined, {rejectValue: any}>(
    'auth/check',
    async (_, {rejectWithValue}) => {
        try {
            const response = await instance.get('/api/auth/check');

            console.log(response);
        } catch (error) {
            if(axios.isAxiosError(error)) {
                console.log(error.response);
            }
        }
    }
)

export const login = createAsyncThunk<any, any, {rejectValue: any}>(
    'auth/login',
    async (data, {rejectWithValue}) => {
        try {
            await instance.get('/sanctum/csrf-cookie');

            const response = await instance.post('/login', data);

            console.log(response);
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log(error.response);
                console.log(error.response?.status);
            }
        }
    }
)

export const register = createAsyncThunk<any, any, {rejectValue: any}>(
    'auth/register',
    async (data, {rejectWithValue}) => {
        try {
            await instance.get('/sanctum/csrf-cookie');

            const response = await instance.post('/register', data);

            console.log(response);
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log(error.response);
                console.log(error.response?.status);
            }
        }
    }
)