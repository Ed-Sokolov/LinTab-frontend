import {object, string} from "yup";

export const AboutSchema = object({
    nickname: string()
        .min(4, "Too short!")
        .max(50, "Too long!")
        .required("Nickname is required!"),
    name: string()
        .max(100, "Too long!"),
    about: string()
        .max(255, "Too long!")
})