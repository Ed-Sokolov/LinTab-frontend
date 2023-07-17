import {UseSvg} from "../UseSvg/UseSvg";
import React from "react";
import "./avatar.scss";

type AvatarTypes = {
    avatar?: {
        id: number;
        url: string;
    } | null;
    size: "l" | "m" | "s";
}

export const Avatar: React.FC<AvatarTypes> = ({avatar = null, size}) => {
    return (
        <div className={`user_avatar_wrapper ${size}`}>
            <div className="user_avatar">
                {
                    avatar === null ?
                        <UseSvg spriteName={"default_avatar"} className={"avatar"}/> :
                        <img src={avatar.url} className={"avatar"}/>
                }
            </div>
        </div>
    )
}