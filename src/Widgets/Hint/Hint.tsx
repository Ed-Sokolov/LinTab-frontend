import {UseSvg} from "../UseSvg/UseSvg";
import React from "react";
import "./hint.scss"
import {H5} from "../Headings/H5/H5";
import {AuthField} from "../AuthField/AuthField";
import {ListItem} from "../ListItem/ListItem";

export const Hint = () => {
    return (
        <div className="hint">
            <UseSvg spriteName={"warning"} className={"hint_icon"}></UseSvg>
            <div className="hint_content">
                <H5>If you want:</H5>
                <ul className="hint_content_list">
                    <ListItem text={"Become a part of our family"}/>
                    <ListItem text={"Add your posts"}/>
                    <ListItem text={"Like other posts"}/>
                </ul>
                <p className="link_title">You should be authorized</p>
                <AuthField isCenter={true}/>
            </div>
        </div>
    )
}