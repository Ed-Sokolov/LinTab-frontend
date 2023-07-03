import {H2} from "../../../../Widgets/Headings/H2/H2";
import {Button} from "../../../../Widgets/Button/Button";
import {NavLink} from "react-router-dom";
import {UseSvg} from "../../../../Widgets/UseSvg/UseSvg";
import React from "react";
import {Field, Form, Formik, FormikHelpers} from "formik";
import {useAppDispatch} from "../../../../Store/Hook/hook";
import {register} from "../../../../API/AuthApi";

type SignUpTypes = {
    email: string | '';
    name: string | '';
    password: string | '';
    password_confirmation: string | ''
}

export const SignUpComponent: React.FC = () => {
    const dispatch = useAppDispatch();

    const initValues: SignUpTypes = {
        email: '',
        name: '',
        password: '',
        password_confirmation: ''
    }

    const signUp = (values: SignUpTypes, actions: FormikHelpers<SignUpTypes>) => {
        values.password_confirmation = values.password;
        dispatch(register(values))
    }

    return (
        <div className="sign__content right">
            <H2>Sign Up</H2>
            <Formik initialValues={initValues} onSubmit={signUp}>
                <Form className="sign_form">
                    <div className="form_group">
                        <label className="label" htmlFor="email_up">Email</label>
                        <Field type="email" name="email" id="email_up" className="input" placeholder="Email"/>
                    </div>
                    <div className="form_group">
                        <label className="label" htmlFor="name_up">Name</label>
                        <Field type="text" name="name" id="name_up" className="input" placeholder="Name"/>
                    </div>
                    <div className="form_group">
                        <label className="label" htmlFor="password_up">Password</label>
                        <Field type="password" name="password" id="password_up" className="input" placeholder="Password"/>
                    </div>
                    <Button type={"submit"} classes={"btn btn-outline-white btn_sign"}>sign up</Button>
                </Form>
            </Formik>
            <div className="switch">
                <p className="text">You have an account?</p>
                <NavLink to={"/sign-in"} className="switch_link">
                    <UseSvg spriteName={"full_arrow_left"} className={"full_arrow_icon"}/>
                    sign in
                </NavLink>
            </div>
        </div>
    )
}