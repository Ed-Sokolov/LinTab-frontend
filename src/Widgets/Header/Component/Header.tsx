import './header.scss';
import {Container} from "../../Container/Container";
import React from "react";
import {HeaderContent} from "./HeaderContent/HeaderContent";
import {CreateContent} from "../../CreateContent/CreateContent";
import {Hint} from "../../Hint/Hint";

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
                    <div className="double_header">
                        <HeaderContent isAuth={isAuth} profileId={profileId} handleLogOut={handleLogOut}
                                       isShowComponent={isShowComponent}/>
                        <div className="sub_header">
                            <div className="plug"></div>
                            {isAuth && <CreateContent/>}
                            {isShowComponent ? <Hint/> : <div className="plug"></div>}
                        </div>
                    </div>
                </div>
            </Container>
        </header>
    )
}