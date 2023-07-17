import {Avatar} from "./Component/Avatar";
import {UserType} from "../../../../../Types/User/UserType";
import React from "react";
import {AvatarFormTypes} from "../../../Types";
import {FormikHelpers} from "formik";

type AvatarContainerTypes = {
    user: UserType | null
}

export const AvatarContainer: React.FC<AvatarContainerTypes> = ({user}) => {
    const initValues: AvatarFormTypes = {
        avatar: null
    }

    const handleSubmit = (values: AvatarFormTypes, actions: FormikHelpers<AvatarFormTypes>) => {
        console.log(values);
    }

    return <Avatar user={user} initValues={initValues} handleSubmit={handleSubmit}/>
}