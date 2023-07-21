import {object, string} from "yup";

export const ChangePasswordSchema = object({
    old_password: string()
        .required('You must write your old password')
        .min(8, "Old Password must be more than 8 characters")
        .max(50, "Old Password must be less than 50 characters"),
    new_password: string()
        .required('You must write your new password')
        .min(8, "New Password must be more than 8 characters")
        .max(50, "New Password must be less than 50 characters"),
    confirmed_password: string()
        .required('You must confirm your new password')
        .min(8, "Confirmed Password must be more than 8 characters")
        .max(50, "Confirmed Password must be less than 50 characters"),
})