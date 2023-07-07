import {UseSvg} from "../UseSvg/UseSvg";
import "./createContent.scss"
import {NavLink} from "react-router-dom";

export const CreateContent = () => {
    return (
        <div className="create_field">
            <UseSvg spriteName={"add_circle"} className={"create_content_icon"}/>
            <div className="create_content">
                <ul className="content_items">
                    <li className="content_item">
                        <NavLink to={"#"} className="content_link">Post</NavLink>
                    </li>
                    <li className="content_item">
                        <NavLink to={"#"} className="content_link">Project</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}