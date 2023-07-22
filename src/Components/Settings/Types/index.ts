import {JSX} from "react";
import {FormikHelpers} from "formik";
import {UserType} from "../../../Types/User/UserType";

export type ActivatedItemType = 'avatar' | 'about' | 'privacy' | 'setups';

export type ContentsType = {
    avatar: JSX.Element;
    about: JSX.Element;
    privacy: JSX.Element;
    setups: JSX.Element;
}

export type AboutTypes = {
    initValues: AboutFormTypes;
    handleSubmit: (values: AboutFormTypes, actions: FormikHelpers<AboutFormTypes>) => void;
}

export type AvatarTypes = {
    user: UserType;
    initValues: AvatarFormTypes;
    handleSubmit: (values: AvatarFormTypes, actions: FormikHelpers<AvatarFormTypes>) => void;
    handleDestroyAvatar: () => any;
}

export type AboutFormTypes = {
    nickname: string;
    name: string;
    about: string;
}

export type AvatarFormTypes = {
    avatar: File | null;
}

export type SetupsTypes = {
    initValues: ChangePasswordFormTypes,
    handleSubmit: (values: ChangePasswordFormTypes, actions: FormikHelpers<ChangePasswordFormTypes>) => any
}

export type ChangePasswordFormTypes = {
    old_password: string,
    new_password: string,
    password_confirmation: string
}