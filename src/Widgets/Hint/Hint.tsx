import {UseSvg} from "../UseSvg/UseSvg";
import React from "react";
import "./hint.scss"

export const Hint = () => {
    return (
        <div className="hint">
            <UseSvg spriteName={"warning"} className={"hint_icon"}></UseSvg>
            <div className="hint_content">
                adsasdadadsdasdasd
            </div>
        </div>
    )
}