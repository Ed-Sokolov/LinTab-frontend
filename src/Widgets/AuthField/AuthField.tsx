import {NavLink} from "react-router-dom";
import "./authField.scss"
import {UseSvg} from "../UseSvg/UseSvg";
import React from "react";

type AuthFieldTypes = {
    extraClass?: boolean
}

export const AuthField: React.FC<AuthFieldTypes> = ({extraClass = false}) => {
    return (
        <ul className={`auth ${extraClass && 'center'}`}>
            <li className="auth_item">
                <NavLink to={'#'}>sign in</NavLink>
            </li>
            <li className="line">
                <UseSvg spriteName={"line"} className={"line_icon"}></UseSvg>
            </li>
            <li className="auth_item">
                <NavLink to={'#'}>sign up</NavLink>
            </li>
        </ul>
    )
}