import {H5} from "../../Headings/H5/H5";
import {UseSvg} from "../../UseSvg/UseSvg";
import {AuthField} from "../../AuthField/AuthField";
import React from "react";

type MoveToAuthTabContentTypes = {
    title: string;
    text: string;
}

export const MoveToAuthTabContent: React.FC<MoveToAuthTabContentTypes> = (
    {title, text}
) => {
    return (
        <div className="content">
            <H5>{title}</H5>
            <p className="subtitle">{text}</p>
            <div className="pointer">
                <UseSvg spriteName={"arrow_circle_down"} className={"pointer_icon"}/>
            </div>
            <AuthField isCenter={true}/>
        </div>
    )
}