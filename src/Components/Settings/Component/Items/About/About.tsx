import {Field, Form, Formik, FormikHelpers} from "formik";
import React from "react";
import {Button} from "../../../../../Widgets/Button/Button";
import "./about.scss"
import {UserType} from "../../../../../Types/User/UserType";
import {useAppDispatch} from "../../../../../Store/Hook/hook";
import {updateAbout} from "../../../../../API/SettingsApi";

type AboutTypes = {
    user: UserType | null;
}

type AboutFormTypes = {
    nickname: string;
    name: string;
    about: string;
}

export const About: React.FC<AboutTypes> = ({user}) => {
    const dispatch = useAppDispatch();

    const initValues: AboutFormTypes = {
        nickname: user?.nickname ? user.nickname : '',
        name: user?.name ? user.name : '',
        about: user?.about ? user.about : ''
    }

    const handleSubmit = (values: AboutFormTypes, actions: FormikHelpers<AboutFormTypes>) => {
        console.log(values);

        dispatch(updateAbout(values));
    }

    return (
        <div>
            <Formik initialValues={initValues} onSubmit={handleSubmit}>
                <Form className="form">
                    <div className="form_group">
                        <label className="label" htmlFor="nickname">Nickname</label>
                        <Field type="text" name="nickname" id="nickname" className="input" placeholder="Nickname"/>
                    </div>
                    <div className="form_group">
                        <label className="label" htmlFor="name">Name</label>
                        <Field type="text" name="name" id="name" className="input" placeholder="Name"/>
                    </div>
                    <div className="form_group">
                        <label className="label" htmlFor="about">About you</label>
                        <Field as="textarea" name="about" id="about" className="textarea" placeholder="About you"/>
                    </div>
                    <Button type={"submit"} classes="btn btn-orange">apply</Button>
                </Form>
            </Formik>
        </div>
    )
}