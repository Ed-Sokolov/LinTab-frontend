import {Avatar} from "./Component/Avatar";
import {UserType} from "../../../../../Types/User/UserType";
import React from "react";
import {AvatarFormTypes} from "../../../Types";
import {FormikHelpers} from "formik";
import {useAppDispatch} from "../../../../../Hooks/hooks";
import {updateAvatar} from "../../../../../API/SettingsApi";

type AvatarContainerTypes = {
    user: UserType | null
}

export const AvatarContainer: React.FC<AvatarContainerTypes> = ({user}) => {
    const dispatch = useAppDispatch();

    const initValues: AvatarFormTypes = {
        avatar: null
    }

    const handleSubmit = (values: AvatarFormTypes, actions: FormikHelpers<AvatarFormTypes>) => {
        dispatch(updateAvatar(values));
    }

    return user && <Avatar user={user} initValues={initValues} handleSubmit={handleSubmit}/>
}