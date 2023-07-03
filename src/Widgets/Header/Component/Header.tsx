import {NavLink} from "react-router-dom";
import './header.scss';
import {Container} from "../../Container/Container";
import {AuthField} from "../../AuthField/AuthField";
import {UseSvg} from "../../UseSvg/UseSvg";
import React from "react";

type HeaderTypes = {
    isAuth: boolean;
    profileId: number | null;
    handleLogOut: () => any
}

export const Header: React.FC<HeaderTypes> = ({isAuth, profileId, handleLogOut}) => {
    return (
        <header className="header" data-aos="fade-down" data-aos-delay={600}>
            <Container>
                <div className="header_component">
                    <nav className="nav">
                        <ul className="list">
                            <li className="list_item">
                                <NavLink to={'/'}>main</NavLink>
                            </li>
                            <li className="list_item">
                                <NavLink to={'/posts'}>posts</NavLink>
                            </li>
                            <li className="list_item">
                                <NavLink to={'#'}>projects</NavLink>
                            </li>
                            <li className="list_item">
                                <NavLink to={'#'}>help</NavLink>
                            </li>
                        </ul>
                    </nav>
                    <div className="warning">
                        <UseSvg spriteName={"warning"} className={"warning_icon"}></UseSvg>
                    </div>
                    <AuthField isAuth={isAuth} profileId={profileId} handleLogOut={handleLogOut}/>
                </div>
            </Container>
        </header>
    )
}