import "./button.scss"
import React from "react";

type ButtonType = {
    children?: string;
    classes?: string;
    isDisabled?: boolean;
    type?: 'button' | 'reset' | 'submit'
}

export const Button: React.FC<ButtonType> = (
    {
        children = "Read more",
        classes = "btn btn-outline-brown",
        isDisabled = false,
        type = 'button'
    }
) => {
    return (
        <button type={type} className={classes} disabled={isDisabled}>{children}</button>
    )
}