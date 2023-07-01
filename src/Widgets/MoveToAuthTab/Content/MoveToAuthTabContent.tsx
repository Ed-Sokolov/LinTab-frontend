import {H5} from "../../Headings/H5/H5";
import {UseSvg} from "../../UseSvg/UseSvg";
import {AuthField} from "../../AuthField/AuthField";
import React from "react";

export const MoveToAuthTabContent = () => {
    return (
        <div className="content">
            <H5>Do you like these posts?</H5>
            <p className="subtitle">You can create such posts but you need to be authorized</p>
            <div className="pointer">
                <UseSvg spriteName={"arrow_circle_down"} className={"pointer_icon"}/>
            </div>
            <AuthField isCenter={true}/>
        </div>
    )
}