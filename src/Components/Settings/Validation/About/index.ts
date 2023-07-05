import {object, string} from "yup";

export const AboutSchema = object({
    nickname: string()
        .min(4, "Too short!")
        .max(50, "Too long!")
        .required("Nickname is required!"),
    name: string()
        .min(2, "Too short!")
        .max(100, "Too long!"),
    about: string()
        .min(2, "Too short!")
        .max(255, "Too long!")
})