import {Avatar as UserAvatar} from "../../../../../../Widgets/Avatar/Avatar";
import "./avatar.scss";
import {Remove} from "../../../../../../Widgets/Remove/Remove";
import {DropzoneWrapper} from "../../../../../../Widgets/DropzoneWrapper/DropzoneWrapper";
import React from "react";
import {AvatarTypes} from "../../../../Types";

export const Avatar: React.FC<AvatarTypes> = ({user, initValues, handleSubmit}) => {
    return (
        <div className={"settings_avatar_wrapper"}>
            <div className="settings_avatar">
                <UserAvatar size={"m"}/>
                <DropzoneWrapper setFieldValue={() => 1} setFieldTouched={() => 1}
                                 errorMessage={""} isTouched={false} id={"avatar"} file={null} size={"m"}/>
            </div>
            <Remove text={"remove the avatar"} onEvent={() => 1}/>
        </div>
    )
}