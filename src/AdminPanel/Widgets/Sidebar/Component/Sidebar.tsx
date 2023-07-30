import {NavLink} from "react-router-dom";
import "./sidebar.scss";

export const Sidebar = () => {
    let img = require("../../../../Assets/Images/PostCard/Test_post_card_image.jpg");
    return (
        <div className="sidebar">
            <div className="sidebar__profile">
                <NavLink to={"#"} className={"sidebar__profile-link"}>
                    <img src={img} alt="User's avatar" className="sidebar__profile-avatar"/>
                    <p className="sidebar__profile-nickname">Nickname</p>
                </NavLink>
            </div>
            <nav className="sidebar__nav">
                <ul className="sidebar__list">
                    <li className="sidebar__list-item">
                        <NavLink to={"/admin/main"} className="sidebar__list-link">Home</NavLink>
                    </li>
                    <li className="sidebar__list-item">
                        <NavLink to={"/admin/posts"} className="sidebar__list-link">Posts</NavLink>
                    </li>
                    <li className="sidebar__list-item">
                        <NavLink to={"/admin/projects"} className="sidebar__list-link">Projects</NavLink>
                    </li>
                    <li className="sidebar__list-item">
                        <NavLink to={"/admin/about"} className="sidebar__list-link">About</NavLink>
                    </li>
                    <li className="sidebar__list-item">
                        <NavLink to={"/admin/contact"} className="sidebar__list-link">Contact</NavLink>
                    </li>
                    <li className="sidebar__list-item">
                        <NavLink to={"/admin/faq"} className="sidebar__list-link">FAQ</NavLink>
                    </li>
                </ul>
            </nav>
            <NavLink to={"/"} className="sidebar__leave">
                <div className="sidebar__leave-icon"></div>
                <p className="sidebar__leave-text">Leave</p>
            </NavLink>
        </div>
    )
}