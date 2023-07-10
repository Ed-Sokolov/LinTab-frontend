import {H5} from "../../Headings/H5/H5";
import {UseSvg} from "../../UseSvg/UseSvg";
import {AuthField} from "../../AuthField/AuthField";
import React from "react";
import {NavLink} from "react-router-dom";

type MoveToAuthTabContentTypes = {
    title: string;
    text: string;
    isCustomLink: boolean;
    linkName: string;
    link: string;
}

export const MoveToTabContent: React.FC<MoveToAuthTabContentTypes> = (
    {title, text, isCustomLink, linkName, link}
) => {
    return (
        <div className="content">
            <H5>{title}</H5>
            <p className="subtitle">{text}</p>
            <div className="pointer">
                <UseSvg spriteName={"arrow_circle_down"} className={"pointer_icon"}/>
            </div>
            {
                isCustomLink ?
                    <NavLink to={link} className={"custom_link"}>{linkName}</NavLink> :
                    <AuthField isCenter={true}/>
            }
        </div>
    )
}