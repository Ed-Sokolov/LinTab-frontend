import {NavLink} from "react-router-dom";
import './header.scss';
import {Container} from "../../Container/Container";
import {AuthField} from "../../AuthField/AuthField";
import {UseSvg} from "../../UseSvg/UseSvg";
import React from "react";
import {Hint} from "../../Hint/Hint";

type HeaderTypes = {
    isAuth: boolean;
    profileId: number | null;
    handleLogOut: () => any
}

export const Header: React.FC<HeaderTypes> = ({isAuth, profileId, handleLogOut}) => {
    return (
        <header className="header" data-aos="fade-down" data-aos-delay={600}>
            <Container>
                <div className="header_content_wrapper">
                    <div className="header_content">
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
                        <Hint/>
                        <AuthField isHeader={true} isAuth={isAuth} profileId={profileId} handleLogOut={handleLogOut}/>
                    </div>
                </div>
            </Container>
        </header>
    )
}