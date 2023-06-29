import {NavLink} from "react-router-dom";
import "./authField.scss"

export const AuthField = () => {
    const lineIcon: string = require('../../Assets/Icons/line.svg').default

    return (
        <ul className="auth">
            <li>
                <NavLink to={'#'}>sign in</NavLink>
            </li>
            <li className="line">
                <img src={lineIcon} alt=""/>
            </li>
            <li>
                <NavLink to={'#'}>sign up</NavLink>
            </li>
        </ul>
    )
}