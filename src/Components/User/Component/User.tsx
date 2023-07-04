import React from "react";
import {UserType} from "../../../Types/User/UserType";
import {Container} from "../../../Widgets/Container/Container";
import "./user.scss"
import {H3} from "../../../Widgets/Headings/H3/H3";
import {UseSvg} from "../../../Widgets/UseSvg/UseSvg";
import {NavLink} from "react-router-dom";

type UserTypes = {
    user: UserType | null;
}

export const User: React.FC<UserTypes> = ({user}) => {
    return (
        <div className="profile_wrapper">
            <div className="profile_back">
                {user &&
                    <Container>
                        <div className="user_data">
                            <div className="main_data">
                                <div className="user_avatar_wrapper">
                                    <div className="user_avatar">
                                        <UseSvg spriteName={"default_avatar"} className={"avatar"}/>
                                    </div>
                                </div>
                                <div className="user_names">
                                    <H3>{user.nickname}</H3>
                                    {user.name && <p className="user_name">{user.name}</p>}
                                </div>
                            </div>
                            <div className="about_field">
                                <p className="about_title">About {user.nickname}</p>
                                <p className="about_information">{user.about}</p>
                            </div>
                            <div className="move_to_setting_wrapper">
                                <NavLink to={'/settings'} className="move_to_setting">
                                    <UseSvg spriteName={'settings'} className={"setting_icon"}/>
                                    settings
                                </NavLink>
                            </div>
                        </div>
                    </Container>
                }
            </div>
        </div>
    )
}