import {NavLink} from "react-router-dom";
import './header.scss';
import {Container} from "../../Container/Container";
import {AuthField} from "../../AuthField/AuthField";
import React from "react";
import {Hint} from "../../Hint/Hint";
import {AddContent} from "../../AddContent/AddContent";

type HeaderTypes = {
    isAuth: boolean;
    profileId: number | null;
    handleLogOut: () => any;
    isShowComponent: boolean
}

export const Header: React.FC<HeaderTypes> = ({isAuth, profileId, handleLogOut, isShowComponent}) => {
    return (
        <header className="header" data-aos="fade-down" data-aos-delay={600}>
            <Container>
                <div className="header_content_wrapper">
                    <div
                        className="header_content">
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
                        {isAuth && <AddContent/>}
                        <Hint alignment={isShowComponent ? 'center' : 'left'}/>
                        {isShowComponent && <AuthField isHeader={true} isAuth={isAuth} profileId={profileId}
                                                                handleLogOut={handleLogOut}/>}
                    </div>
                </div>
            </Container>
        </header>
    )
}