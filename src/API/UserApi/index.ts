import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {instance} from "../Instance/instance";
import {UserType} from "../../Types/User/UserType";

export const getUser = createAsyncThunk<UserType, number, {rejectValue: any}>(
    'user/getUser',
    async (id, {rejectWithValue}) => {
        try {
            const response = await instance.get(`/api/users/${id}`);

            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log(error.response);
            }
        }
    }
)