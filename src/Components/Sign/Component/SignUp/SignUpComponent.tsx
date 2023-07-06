import {H2} from "../../../../Widgets/Headings/H2/H2";
import {Button} from "../../../../Widgets/Button/Button";
import {NavLink} from "react-router-dom";
import {UseSvg} from "../../../../Widgets/UseSvg/UseSvg";
import React from "react";
import {Field, Form, Formik, FormikHelpers} from "formik";
import {useAppDispatch} from "../../../../Store/Hook/hook";
import {register} from "../../../../API/AuthApi";
import {SignUpSchema} from "../../Validation/SignUp";
import {ErrorField} from "../../../../Widgets/ErrorField/ErrorField";

type SignUpTypes = {
    email: string;
    nickname: string;
    password: string;
    password_confirmation: string
}

export const SignUpComponent: React.FC = () => {
    const dispatch = useAppDispatch();

    const initValues: SignUpTypes = {
        email: '',
        nickname: '',
        password: '',
        password_confirmation: ''
    }

    const signUp = (values: SignUpTypes, actions: FormikHelpers<SignUpTypes>) => {
        values.password_confirmation = values.password;
        dispatch(register(values))
            .catch(error => {
                for (const errorKey in error.errors) {
                    actions.setFieldError(errorKey, error.errors[errorKey][0]);
                }
            })
    }

    return (
        <div className="sign__content right">
            <H2>Sign Up</H2>
            <Formik initialValues={initValues} onSubmit={signUp} validationSchema={SignUpSchema}
                    validateOnMount={true} enableReinitialize={true}>
                {
                    ({errors, touched, isValid}) => <Form className="sign_form">
                        <div className="form_group">
                            <label className="label" htmlFor="email_up">Email</label>
                            <div className="input_wrapper">
                                <Field type="email" name="email" id="email_up" className="input" placeholder="Email"/>
                                {(errors.email && touched.email) && <ErrorField message={errors.email}/>}
                            </div>
                        </div>
                        <div className="form_group">
                            <label className="label" htmlFor="nickname_up">Nickname</label>
                            <div className="input_wrapper">
                                <Field type="text" name="nickname" id="nickname_up" className="input"
                                       placeholder="Nickname"/>
                                {(errors.nickname && touched.nickname) && <ErrorField message={errors.nickname}/>}
                            </div>
                        </div>
                        <div className="form_group">
                            <label className="label" htmlFor="password_up">Password</label>
                            <div className="input_wrapper">
                                <Field type="password" name="password" id="password_up" className="input"
                                       placeholder="Password"/>
                                {(errors.password && touched.password) && <ErrorField message={errors.password}/>}
                            </div>
                        </div>
                        <Button type={"submit"} classes={"btn btn-outline-white btn_sign"} isDisabled={!isValid}>sign
                            up</Button>
                    </Form>
                }
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