import React from "react";
import "./labelWrapper.scss"

type LabelWrapperTypes = {
    htmlFor?: string;
    text: string;
    children: React.ReactElement;
}

export const LabelWrapper: React.FC<LabelWrapperTypes> = ({htmlFor, text, children}) => {
    return (
        <div className="form_group">
            {
                htmlFor ?
                    <label className="label" htmlFor={htmlFor}>{text}</label> :
                    <div className="label">{text}</div>
            }
            {children}
        </div>
    )
}