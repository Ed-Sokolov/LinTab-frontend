import {NavLink} from "react-router-dom";
import {UseSvg} from "../UseSvg/UseSvg";
import React from "react";
import "./moveToSettings.scss";

export const MoveToSettings = () => {
    return (
        <div className="move_to_setting_wrapper">
            <NavLink to={'/settings'} className="move_to_setting custom_link">
                <UseSvg spriteName={'settings'} className={"setting_icon"}/>
                settings
            </NavLink>
        </div>
    )
}