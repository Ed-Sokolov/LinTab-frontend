import React from "react";
import "./labelWrapper.scss"

type LabelWrapperTypes = {
    htmlFor: string;
    text: string;
    children: React.ReactElement;
}

export const LabelWrapper: React.FC<LabelWrapperTypes> = ({htmlFor, text, children}) => {
    return (
        <div className="form_group">
            <label className="label" htmlFor={htmlFor}>{text}</label>
            {children}
        </div>
    )
}