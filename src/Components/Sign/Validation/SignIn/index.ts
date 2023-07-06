import {object, string} from "yup";

export const SignInSchema = object({
    email: string()
        .email("Email must be email type")
        .required("Email is required"),
    password: string()
        .min(8, "Password must be more than 8 characters")
        .max(50, "Password must be less than 50 characters")
        .required("Password is required!")
})