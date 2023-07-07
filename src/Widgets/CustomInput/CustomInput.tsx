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

export const CustomInput: React.FC<CustomInputTypes> = ({
                                                            type,
                                                            errorMessage,
                                                            name,
                                                            id,
                                                            isTouched,
                                                            placeholder,
                                                            className = "input",
                                                            as = "input"
                                                        }) => {
    return (
        <div className="input_wrapper">
            <Field type={type} as={as} id={id} name={name} className={className} placeholder={placeholder}/>
            {(errorMessage && isTouched) && <ErrorField message={errorMessage}/>}
        </div>
    )
}