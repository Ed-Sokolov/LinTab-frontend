import "./button.scss"
import React from "react";

type ButtonType = {
    text?: string;
    classes?: string;
}

export const Button: React.FC<ButtonType> = ({
                                                 text = "Read more",
                                                 classes = "btn btn-outline-dark"
                                             }) => {
    return (
        <button className={classes}>{text}</button>
    )
}