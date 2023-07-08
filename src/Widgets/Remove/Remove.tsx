import React from "react";
import {UseSvg} from "../UseSvg/UseSvg";
import "./remove.scss"

type RemoveTypes = {
    text: string;
}

export const Remove: React.FC<RemoveTypes> = ({text}) => {
    return (
        <div className="remove_wrapper">
            <div className={"remove"}>
                <UseSvg spriteName={"trash"} className={"remove_icon"}/>
                <p className="remove_text">{text}</p>
            </div>
        </div>
    )
}