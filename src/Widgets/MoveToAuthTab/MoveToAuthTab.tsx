import "./moveToAuthTab.scss"
import {H5} from "../Headings/H5/H5";
import {AuthField} from "../AuthField/AuthField";

export const MoveToAuthTab = () => {
    return (
        <div className="move_to_auth" data-aos="fade-up">
            <div className="content">
                <H5>Do you like these posts?</H5>
                <p className="subtitle">You can create such posts but you need to be authorized</p>
                <AuthField></AuthField>
            </div>
        </div>
    )
}