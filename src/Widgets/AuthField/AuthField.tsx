import {NavLink} from "react-router-dom";
import "./authField.scss"
import {UseSvg} from "../UseSvg/UseSvg";
import React from "react";

type AuthFieldTypes = {
    isCenter?: boolean;
    isAuth?: boolean;
    handleLogOut?: () => any;
}

export const AuthField: React.FC<AuthFieldTypes> = ({isCenter = false, isAuth = false, handleLogOut}) => {
    return (
        <ul className={`auth ${isCenter && 'center'}`}>
            <li className="auth_item">
                {
                    isAuth ? <NavLink to={'/users/2'}>personal</NavLink> : <NavLink to={'/sign-in'}>sign in</NavLink>
                }
            </li>
            <li className="line">
                <UseSvg spriteName={"line"} className={"line_icon"}></UseSvg>
            </li>
            <li className="auth_item">
                {
                    isAuth ? <p onClick={handleLogOut}>sign out</p> : <NavLink to={'/sign-up'}>sign up</NavLink>
                }
            </li>
        </ul>
    )
}