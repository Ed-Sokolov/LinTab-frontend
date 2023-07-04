import {Container} from "../../Container/Container";
import "./footer.scss"
import {H4} from "../../Headings/H4/H4";
import {NavLink} from "react-router-dom";
import {UseSvg} from "../../UseSvg/UseSvg";

export const Footer = () => {
    return (
        <footer className="footer" data-aos="fade-up">
            <div className="footer_content">
                <Container>
                    <div className="footer_content_body">
                        <div className="company_links">
                            <H4>Lintab</H4>
                            <ul className="social_list">
                                <li className="social_item">
                                    <NavLink to={"#"} className="social_link">
                                        <UseSvg spriteName={"telegram"} className={"social_icon"}></UseSvg>
                                        telegram
                                    </NavLink>
                                </li>
                                <li className="social_item">
                                    <NavLink to={"#"} className="social_link">
                                        <UseSvg spriteName={"instagram"} className={"social_icon"}></UseSvg>
                                        instagram
                                    </NavLink>
                                </li>
                                <li className="social_item">
                                    <NavLink to={"mailto:lintab@gmail.com"} className="social_link">
                                        <UseSvg spriteName={"email"} className={"social_icon"}></UseSvg>
                                        lintab@gmail.com
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="menu">
                            <p className="menu_title">Menu</p>
                            <nav className="nav">
                                <ul className="menu_list">
                                    <li className="menu_item">
                                        <NavLink to={"/"}>Main</NavLink>
                                    </li>
                                    <li className="menu_item">
                                        <NavLink to={"/posts"}>Posts</NavLink>
                                    </li>
                                    <li className="menu_item">
                                        <NavLink to={"#"}>Projects</NavLink>
                                    </li>
                                    <li className="menu_item">
                                        <NavLink to={"#"}>Help</NavLink>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </Container>
                <div className="move_to_contact">
                    Soon...
                </div>
            </div>
            <p className="copyright">
                Copyright © 2023 Sokolov Eduard
            </p>
        </footer>
    )
}