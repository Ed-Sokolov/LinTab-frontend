import React from "react";
import {UserType} from "../../../Types/User/UserType";
import {Container} from "../../../Widgets/Container/Container";
import "./user.scss"
import {H3} from "../../../Widgets/Headings/H3/H3";
import {UseSvg} from "../../../Widgets/UseSvg/UseSvg";
import {NavLink} from "react-router-dom";
import parse from "html-react-parser";

export const User: React.FC<UserType> = ({id, nickname, name, about, email, avatar}) => {
    const parsedAbout = parse(about);

    return (
        <div className="profile_wrapper">
            <div className="profile_back">
                <Container>
                    <div className="user_data">
                        <div className="main_data">
                            <div className="user_avatar_wrapper">
                                <div className="user_avatar">
                                    <UseSvg spriteName={"default_avatar"} className={"avatar"}/>
                                </div>
                            </div>
                            <div className="user_names">
                                <H3>{nickname}</H3>
                                <p className="user_name">{name}</p>
                            </div>
                        </div>
                        <div className="about_field">
                            <div className="about_information">
                                {parsedAbout}
                            </div>
                        </div>
                        <div className="move_to_setting_wrapper">
                            <NavLink to={'/settings'} className="move_to_setting">
                                <UseSvg spriteName={'settings'} className={"setting_icon"}/>
                                settings
                            </NavLink>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}