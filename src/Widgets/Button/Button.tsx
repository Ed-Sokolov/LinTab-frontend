import "./button.scss"
import React from "react";

type ButtonType = {
    children?: string;
    classes?: string;
    isDisabled?: boolean
}

export const Button: React.FC<ButtonType> = (
    {
        children = "Read more",
        classes = "btn btn-outline-dark",
        isDisabled = false
    }
) => {
    return (
        <button className={classes} disabled={isDisabled}>{children}</button>
    )
}