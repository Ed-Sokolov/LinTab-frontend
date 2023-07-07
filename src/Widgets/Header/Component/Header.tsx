import './header.scss';
import {Container} from "../../Container/Container";
import React from "react";
import {HeaderContent} from "./HeaderContent/HeaderContent";
import {CreateContent} from "../../CreateContent/CreateContent";

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
                    {
                        isAuth ?
                            <div className="double_header">
                                <HeaderContent isAuth={isAuth} profileId={profileId} handleLogOut={handleLogOut}
                                               isShowComponent={isShowComponent}/>
                                <div className="sub_header">
                                    <CreateContent/>
                                </div>
                            </div> :
                            <HeaderContent isAuth={isAuth} profileId={profileId} handleLogOut={handleLogOut}
                                           isShowComponent={isShowComponent}/>
                    }
                </div>
            </Container>
        </header>
    )
}