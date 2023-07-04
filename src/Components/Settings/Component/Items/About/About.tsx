import {Formik, FormikHelpers} from "formik";
import React from "react";

type AboutTypes = {
    nickname: string;
    name: string;
    about: string;
}

export const About = () => {
    const initValues: AboutTypes = {
        nickname: '',
        name: '',
        about: ''
    }

    const handleSubmit = (values: AboutTypes, actions: FormikHelpers<AboutTypes>) => {
        console.log(values);
    }

    return (
        <div>
            <Formik initialValues={initValues} onSubmit={handleSubmit}>

            </Formik>
        </div>
    )
}