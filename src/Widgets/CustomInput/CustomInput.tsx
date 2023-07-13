import {Field} from "formik";
import {ErrorField} from "../ErrorField/ErrorField";
import React from "react";
import "./customInput.scss";

type CustomInputTypes = {
    className?: string;
    id: string;
    name: string;
    type?: 'text' | 'email' | 'password';
    as?: 'input' | 'textarea';
    placeholder: string;
    errorMessage: string | undefined;
    isTouched: boolean | undefined;
}

export const CustomInput: React.FC<CustomInputTypes> = (
    {
        type = "text", errorMessage, name, id, isTouched,
        placeholder, className = "input", as = "input"
    }
) => {
    let autoCompleteValue: string;

    switch (type) {
        case "password":
            autoCompleteValue = "current-password";
            break;
        case "email":
            autoCompleteValue = "email";
            break;
        default:
            autoCompleteValue = "off";
            break;
    }

    return (
        <div className="input_wrapper">
            <Field type={type} as={as} id={id} name={name} className={className} placeholder={placeholder}
                   autoComplete={autoCompleteValue}/>
            {(errorMessage && isTouched) && <ErrorField message={errorMessage}/>}
        </div>
    )
}