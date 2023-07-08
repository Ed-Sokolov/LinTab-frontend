import React from "react";
import {UseSvg} from "../UseSvg/UseSvg";
import "./remove.scss"

type RemoveTypes = {
    text: string;
    onEvent: () => any;
}

export const Remove: React.FC<RemoveTypes> = ({text, onEvent}) => {
    return (
        <div className="remove_wrapper">
            <div className={"remove"} onClick={onEvent}>
                <UseSvg spriteName={"trash"} className={"remove_icon"}/>
                <p className="remove_text">{text}</p>
            </div>
        </div>
    )
}