import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {instance} from "../Instance/instance";

export const getUser = createAsyncThunk<any, number, {rejectValue: any}>(
    'user/getUser',
    async (id, {rejectWithValue}) => {
        try {
            const response = instance.get(`/api/users/${id}`);

            console.log(response);
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log(error.response);
            }
        }
    }
)