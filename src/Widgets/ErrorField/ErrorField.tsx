import {UseSvg} from "../UseSvg/UseSvg";
import React from "react";
import "./errorField.scss"

type ErrorFieldTypes = {
    message: string
}

export const ErrorField: React.FC<ErrorFieldTypes> = ({message}) => {
    return (
        <div className="error_field">
            <div className="error_content">
                <UseSvg spriteName={"warning"} className={"error_icon"}/>
                <p className="error_message">{message}</p>
            </div>
        </div>
    )
}