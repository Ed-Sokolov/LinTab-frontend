import "./button.scss"
import React from "react";

type ButtonType = {
    children?: string;
    classes?: string;
}

export const Button: React.FC<ButtonType> = ({
                                                 children = "Read more",
                                                 classes = "btn btn-outline-dark"
                                             }) => {
    return (
        <button className={classes}>{children}</button>
    )
}