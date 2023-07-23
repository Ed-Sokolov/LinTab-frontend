import {UseSvg} from "../UseSvg/UseSvg";
import "./deleted.scss";

export const Deleted = () => {
    return (
        <div className="deleted">
            <UseSvg spriteName={"trash"} className={"deleted_icon"}/>
            <p className="deleted_text">deleted</p>
        </div>
    )
}