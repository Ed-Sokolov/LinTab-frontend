import {UseSvg} from "../UseSvg/UseSvg";
import React from "react";
import "./setLike.scss"

export const SetLike = () => {
    return (
        <div className="just_like_it_wrapper">
            <p className="agitation">Just like it</p>
            <div className="pointer">
                <UseSvg spriteName={"arrow_circle_down"} className={"pointer_icon"}/>
            </div>
            <div className="just_like_it">
                <UseSvg spriteName={"like"} className={"like_it_icon"}/>
                <p className="count">100</p>
            </div>
        </div>
    )
}