import {NavLink} from "react-router-dom";
import "./authField.scss"
import {UseSvg} from "../UseSvg/UseSvg";
import React from "react";

type AuthFieldTypes = {
    isHeader?: boolean;
    isCenter?: boolean;
    isAuth?: boolean;
    profileId?: number | null;
    handleLogOut?: () => any;
}

export const AuthField: React.FC<AuthFieldTypes> = (
    {
        isHeader = false,
        isCenter = false,
        isAuth = false,
        profileId,
        handleLogOut
    }
) => {
    return (
        <ul className={`auth ${isCenter && 'center'} ${isHeader && 'header_auth'}`}>
            {
                (isHeader && isAuth) && <>
                    <li className="auth_item">
                        <NavLink to={'/admin/main'} className={"custom_link"}>admin</NavLink>
                    </li>
                    <li className="slash">
                        <UseSvg spriteName={"slash"} className={"slash_icon"}/>
                    </li>
                </>
            }
            <li className="auth_item">
                {
                    isAuth ? <NavLink to={profileId ? `/users/${profileId}` : '#'}
                                      className={"custom_link"}>profile</NavLink> :
                        <NavLink to={'/sign-in'} className={"custom_link"}>sign in</NavLink>
                }
            </li>
            <li className="line">
                <UseSvg spriteName={"line"} className={"line_icon"}/>
            </li>
            <li className="auth_item">
                {
                    isAuth ? <p onClick={handleLogOut} className="sign_out custom_link">sign out</p> :
                        <NavLink to={'/sign-up'} className={"custom_link"}>sign up</NavLink>
                }
            </li>
        </ul>
    )
}