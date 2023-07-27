import {UseSvg} from "../UseSvg/UseSvg";
import React from "react";
import "./pointerDown.scss";

export const PointerDown = () => {
    return (
        <div className="pointer">
            <UseSvg spriteName={"arrow_circle_down"} className={"pointer_icon"}/>
        </div>
    )
}