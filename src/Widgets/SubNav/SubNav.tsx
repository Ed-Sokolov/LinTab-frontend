import {NavLink} from "react-router-dom";
import "./subNav.scss";

export const SubNav = () => {
    return (
        <ul className={"sub_nav"}>
            <li className="sub_item">
                <NavLink to={"/about"} className="custom_link sub_link">About</NavLink>
            </li>
            <li className="sub_item">
                <NavLink to={"/contact"} className="custom_link sub_link">Contact</NavLink>
            </li>
            <li className="sub_item">
                <NavLink to={"/faq"} className="custom_link sub_link">FAQ</NavLink>
            </li>
        </ul>
    )
}