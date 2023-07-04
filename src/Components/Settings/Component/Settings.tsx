import "./settings.scss"
import {Container} from "../../../Widgets/Container/Container";
import {H3} from "../../../Widgets/Headings/H3/H3";
import {UseSvg} from "../../../Widgets/UseSvg/UseSvg";

export const Settings = () => {
    return (
        <div className="settings_wrapper">
            <div className="settings_back">
                <Container>
                    <div className="settings">
                        <H3>Settings</H3>
                        <div className="settings_content">
                            <nav className="settings_nav">
                                <ul className="settings_list">
                                    <li className="settings_item active">
                                        <UseSvg spriteName={"camera"} className={"settings_icon"}/>
                                        <span className="name">avatar</span>
                                    </li>
                                    <li className="settings_item">
                                        <UseSvg spriteName={"user_about"} className={"settings_icon"}/>
                                        <span className="name">about you</span>
                                    </li>
                                    <li className="settings_item">
                                        <UseSvg spriteName={"user_privacy"} className={"settings_icon"}/>
                                        <span className="name">privacy</span>
                                    </li>
                                    <li className="settings_item">
                                        <UseSvg spriteName={"user_setups"} className={"settings_icon"}/>
                                        <span className="name">setups</span>
                                    </li>
                                </ul>
                            </nav>
                            <div className="selected_settings">
                                some content
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}