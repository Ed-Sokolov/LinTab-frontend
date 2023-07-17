import {About} from "./Component/About";
import {AboutFormTypes} from "../../../Types";
import {FormikHelpers} from "formik";
import {updateAbout} from "../../../../../API/SettingsApi";
import {useAppDispatch} from "../../../../../Hooks/hooks";
import {UserType} from "../../../../../Types/User/UserType";
import React from "react";

type AboutContainerTypes = {
    user: UserType | null
}

export const AboutContainer: React.FC<AboutContainerTypes> = ({user}) => {
    const dispatch = useAppDispatch();

    const initValues: AboutFormTypes = {
        nickname: user?.nickname ? user.nickname : '',
        name: user?.name ? user.name : '',
        about: user?.about ? user.about : ''
    }

    const handleSubmit = (values: AboutFormTypes, actions: FormikHelpers<AboutFormTypes>) => {
        dispatch(updateAbout(values))
            .catch(error => {
                for (const errorKey in error.errors) {
                    actions.setFieldError(errorKey, error.errors[errorKey][0]);
                }
            });
    }

    return <About initValues={initValues} handleSubmit={handleSubmit}/>
}