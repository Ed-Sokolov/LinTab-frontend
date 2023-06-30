import {NavLink} from "react-router-dom";
import "./authField.scss"
import {UseSvg} from "../UseSvg/UseSvg";

export const AuthField = () => {
    return (
        <ul className="auth">
            <li>
                <NavLink to={'#'}>sign in</NavLink>
            </li>
            <li className="line">
                <UseSvg spriteName={"line"} className={"line_icon"}></UseSvg>
            </li>
            <li>
                <NavLink to={'#'}>sign up</NavLink>
            </li>
        </ul>
    )
}