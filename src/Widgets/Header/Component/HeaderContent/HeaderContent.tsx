import {NavLink} from "react-router-dom";
import {Hint} from "../../../Hint/Hint";
import {AuthField} from "../../../AuthField/AuthField";
import React from "react";

type HeaderContentTypes = {
    isAuth: boolean;
    profileId: number | null;
    handleLogOut: () => any;
    isShowComponent: boolean
}

export const HeaderContent: React.FC<HeaderContentTypes> = ({isAuth, profileId, handleLogOut, isShowComponent}) => {
    return (
        <div className="header_content">
            <nav className="nav">
                <ul className="list">
                    <li className="list_item">
                        <NavLink to={'/'} className={"custom_link"}>main</NavLink>
                    </li>
                    <li className="list_item">
                        <NavLink to={'/posts'} className={"custom_link"}>posts</NavLink>
                    </li>
                    <li className="list_item">
                        <NavLink to={'#'} className={"custom_link"}>projects</NavLink>
                    </li>
                    <li className="list_item">
                        <NavLink to={'#'} className={"custom_link"}>help</NavLink>
                    </li>
                </ul>
            </nav>
            <Hint alignment={isShowComponent ? 'center' : 'left'}/>
            {isShowComponent && <AuthField isHeader={true} isAuth={isAuth} profileId={profileId}
                                           handleLogOut={handleLogOut}/>}
        </div>
    )
}