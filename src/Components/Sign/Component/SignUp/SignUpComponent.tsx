import {H2} from "../../../../Widgets/Headings/H2/H2";
import {Button} from "../../../../Widgets/Button/Button";
import {NavLink} from "react-router-dom";
import {UseSvg} from "../../../../Widgets/UseSvg/UseSvg";
import React from "react";
import {Field, Form, Formik, FormikHelpers} from "formik";
import {useAppDispatch} from "../../../../Hooks/hooks";
import {register} from "../../../../API/AuthApi";
import {SignUpSchema} from "../../Validation/SignUp";
import {ErrorField} from "../../../../Widgets/ErrorField/ErrorField";
import {CustomInput} from "../../../../Widgets/CustomInput/CustomInput";

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
                            <CustomInput type={"email"} className={"input"} id={"email_up"} name={"email"}
                                         placeholder={"Email"} errorMessage={errors.email} isTouched={touched.email}/>
                        </div>
                        <div className="form_group">
                            <label className="label" htmlFor="nickname_up">Nickname</label>
                            <CustomInput type={"text"} className={"input"} id={"nickname_up"} name={"nickname"}
                                         placeholder={"Nickname"} errorMessage={errors.nickname}
                                         isTouched={touched.nickname}/>
                        </div>
                        <div className="form_group">
                            <label className="label" htmlFor="password_up">Password</label>
                            <CustomInput type={"password"} className={"input"} id={"password_up"} name={"password"}
                                         placeholder={"Password"} errorMessage={errors.password}
                                         isTouched={touched.password}/>
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