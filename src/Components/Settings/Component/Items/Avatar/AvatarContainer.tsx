import {Avatar} from "./Component/Avatar";
import {UserType} from "../../../../../Types/User/UserType";
import React from "react";

type AvatarContainerTypes = {
    user: UserType | null
}

export const AvatarContainer: React.FC<AvatarContainerTypes> = ({user}) => {
    return <Avatar/>
}