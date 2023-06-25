import {NavLink} from "react-router-dom";
import './header.scss';

export const Header = () => {
    const warningIcon: string = require('../../../Assets/Icons/warning.svg').default
    const lineIcon: string = require('../../../Assets/Icons/line.svg').default

    return (
        <header className="header">
            <nav className="nav">
                <ul>
                    <li>
                        <NavLink to={'#'} >main</NavLink>
                    </li>
                    <li>
                        <NavLink to={'#'} >posts</NavLink>
                    </li>
                    <li>
                        <NavLink to={'#'} >projects</NavLink>
                    </li>
                    <li>
                        <NavLink to={'#'} >help</NavLink>
                    </li>
                </ul>
            </nav>
            <div className="warning">
                <img src={warningIcon} alt=""/>
            </div>
            <ul className="auth">
                <li>
                    <NavLink to={'#'}>sign in</NavLink>
                </li>
                <li>
                    <img src={lineIcon} alt=""/>
                </li>
                <li>
                    <NavLink to={'#'}>sign up</NavLink>
                </li>
            </ul>
        </header>
    )
}