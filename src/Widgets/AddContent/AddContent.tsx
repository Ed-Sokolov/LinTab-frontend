import {UseSvg} from "../UseSvg/UseSvg";
import "./addContent.scss"
import {NavLink} from "react-router-dom";

export const AddContent = () => {
    return (
        <div className="add_field">
            <UseSvg spriteName={"add_circle"} className={"add_content_icon"}/>
            <div className="add_content">
                <ul className="content_items">
                    <li className="content_item">
                        <NavLink to={"#"} className="content_link">Post</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}