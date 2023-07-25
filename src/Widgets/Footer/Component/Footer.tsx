import {Container} from "../../Container/Container";
import "./footer.scss"
import {H4} from "../../Headings/H4/H4";
import {NavLink} from "react-router-dom";
import {UseSvg} from "../../UseSvg/UseSvg";
import React from "react";
import {SubNav} from "../../SubNav/SubNav";

export const Footer = () => {
    return (
        <div className="footer_wrapper">
            <footer className="footer" data-aos="fade-up">
                <Container>
                    <div className="footer_content">
                        <div className="company_links">
                            <H4>Lintab</H4>
                            <ul className="social_list">
                                <li className="social_item">
                                    <NavLink to={"#"} className="social_link custom_link">
                                        <UseSvg spriteName={"telegram"} className={"social_icon"}></UseSvg>
                                        <p>telegram</p>
                                    </NavLink>
                                </li>
                                <li className="social_item">
                                    <NavLink to={"#"} className="social_link custom_link">
                                        <UseSvg spriteName={"instagram"} className={"social_icon"}></UseSvg>
                                        <p>instagram</p>
                                    </NavLink>
                                </li>
                                <li className="social_item">
                                    <NavLink to={"mailto:lintab@gmail.com"} className="social_link custom_link">
                                        <UseSvg spriteName={"email"} className={"social_icon"}></UseSvg>
                                        <p>lintab@gmail.com</p>
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="menu">
                            <p className="menu_title">Menu</p>
                            <nav className="nav">
                                <ul className="menu_list">
                                    <li className="menu_item">
                                        <NavLink to={"/"} className={"custom_link"}>Main</NavLink>
                                    </li>
                                    <li className="menu_item">
                                        <NavLink to={"/posts"} className={"custom_link"}>Posts</NavLink>
                                    </li>
                                    <li className="menu_item">
                                        <NavLink to={"#"} className={"custom_link"}>Projects</NavLink>
                                    </li>
                                    <li className="menu_item sub_nav_parent">
                                        <div className={"sub_nav_link custom_link"}>
                                            <span>Help</span>
                                            <UseSvg spriteName={"arrow_right"} className={"sub_nav_icon"}/>
                                        </div>
                                        <SubNav/>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="move_to_contact">
                            Soon...
                        </div>
                    </div>
                    <p className="copyright">
                        Copyright © 2023 Sokolov Eduard
                    </p>
                </Container>
            </footer>
        </div>
    )
}