import {object, string} from "yup";

export const CreatePostSchema = object({
    title: string()
        .required("The title is required")
        .min(4, "The title must be more than 4 characters")
        .max(255, "The title must be less than 255 characters"),
    content: string()
        .required("The content is required")
        .min(100, "The content must be more than 100 characters")
        .max(60000, "The content must be less than 60000 characters")
})