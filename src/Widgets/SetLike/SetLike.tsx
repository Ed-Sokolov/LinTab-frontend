import {UseSvg} from "../UseSvg/UseSvg";
import React from "react";
import "./setLike.scss"
import {PointerDown} from "../PointerDown/PointerDown";

export const SetLike = () => {
    return (
        <div className="just_like_it_wrapper">
            <p className="agitation">Just like it</p>
            <PointerDown/>
            <div className="just_like_it">
                <UseSvg spriteName={"like"} className={"like_it_icon"}/>
                <p className="count">100</p>
            </div>
        </div>
    )
}