import axios from "axios";

const url = process.env.REACT_APP_BACK_URL;

export const instance = axios.create({
    withCredentials: true,
    baseURL: url
})