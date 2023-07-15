import {UseSvg} from "../UseSvg/UseSvg";
import React from "react";
import "./avatar.scss";

type AvatarTypes = {
    avatar?: {
        id: number;
        url: string;
    };
    size: "l" | "m" | "s";
}

export const Avatar: React.FC<AvatarTypes> = ({avatar, size}) => {
    return (
        <div className={`user_avatar_wrapper ${size}`}>
            <div className="user_avatar">
                <UseSvg spriteName={"default_avatar"} className={"avatar"}/>
            </div>
        </div>
    )
}