import {JSX} from "react";
import {FormikHelpers} from "formik";

export type ActivatedItemType = 'avatar' | 'about' | 'privacy' | 'setups';

export type ContentsType = {
    avatar: JSX.Element;
    about: JSX.Element;
    privacy: JSX.Element;
    setups: JSX.Element;
}

export type AboutTypes = {
    initValuesAbout: AboutFormTypes;
    handleSubmitAbout: (values: AboutFormTypes, actions: FormikHelpers<AboutFormTypes>) => void;
}

export type AboutFormTypes = {
    nickname: string;
    name: string;
    about: string;
}