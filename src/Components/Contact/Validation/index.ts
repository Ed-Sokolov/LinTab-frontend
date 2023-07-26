import {object, string} from "yup";

export const ContactFormSchema = object({
    email: string()
        .email("Email must be email type")
        .required("Email is required"),
    name: string()
        .min(2, "Name must be more than 2 characters")
        .max(50, "Name must be less than 50 characters")
        .required("Name is required!"),
    message: string()
        .required("Message is required!")
        .min(10, "Message must be more than 10 characters")
        .max(1000, "Message must be less than 1000 characters")
})