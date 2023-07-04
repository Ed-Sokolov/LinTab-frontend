import "./settings.scss"
import {Container} from "../../../Widgets/Container/Container";
import {H3} from "../../../Widgets/Headings/H3/H3";
import {UseSvg} from "../../../Widgets/UseSvg/UseSvg";
import {NavLink} from "react-router-dom";
import {ActivatedItemType, ContentsType} from "../Types";
import React from "react";

type SettingsTypes = {
    activatedItem: ActivatedItemType;
    contents: ContentsType;
}

export const Settings: React.FC<SettingsTypes> = ({activatedItem, contents}) => {
    return (
        <div className="settings_wrapper">
            <div className="settings_back">
                <Container>
                    <div className="settings">
                        <H3>Settings</H3>
                        <div className="settings_content">
                            <nav className="settings_nav">
                                <ul className="settings_list">
                                    <li className={`settings_item`}>
                                        <NavLink to={'/settings/avatar'} className="settings_link">
                                            <UseSvg spriteName={"camera"} className={"settings_icon"}/>
                                            <span className="name">avatar</span>
                                        </NavLink>
                                    </li>
                                    <li className={`settings_item`}>
                                        <NavLink to={'/settings/about'} className="settings_link">
                                            <UseSvg spriteName={"user_about"} className={"settings_icon"}/>
                                            <span className="name">about you</span>
                                        </NavLink>
                                    </li>
                                    <li className={`settings_item`}>
                                        <NavLink to={'/settings/privacy'} className="settings_link">
                                            <UseSvg spriteName={"user_privacy"} className={"settings_icon"}/>
                                            <span className="name">privacy</span>
                                        </NavLink>
                                    </li>
                                    <li className={`settings_item`}>
                                        <NavLink to={'/settings/setups'} className="settings_link">
                                            <UseSvg spriteName={"user_setups"} className={"settings_icon"}/>
                                            <span className="name">setups</span>
                                        </NavLink>
                                    </li>
                                </ul>
                            </nav>
                            <div className="item_content">
                                {contents[activatedItem]}
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}