import {Button} from "../../../../Widgets/Button/Button";
import {NavLink} from "react-router-dom";
import {UseSvg} from "../../../../Widgets/UseSvg/UseSvg";
import React from "react";
import {Form, Formik, FormikHelpers} from "formik";
import {useAppDispatch} from "../../../../Hooks/hooks";
import {register} from "../../../../API/AuthApi";
import {SignUpSchema} from "../../Validation/SignUp";
import {CustomInput} from "../../../../Widgets/CustomInput/CustomInput";
import {LabelWrapper} from "../../../../Widgets/LabelWrapper/LabelWrapper";
import {H3} from "../../../../Widgets/Headings/H3/H3";

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
            <H3>Sign Up</H3>
            <Formik initialValues={initValues} onSubmit={signUp} validationSchema={SignUpSchema}
                    validateOnMount={true} enableReinitialize={true}>
                {
                    ({errors, touched, isValid}) => <Form className="sign_form">
                        <LabelWrapper htmlFor={"email_up"} text={"Email"}>
                            <CustomInput type={"email"} className={"input"} id={"email_up"} name={"email"}
                                         placeholder={"Email"} errorMessage={errors.email} isTouched={touched.email}/>
                        </LabelWrapper>
                        <LabelWrapper htmlFor={"nickname_up"} text={"Nickname"}>
                            <CustomInput type={"text"} className={"input"} id={"nickname_up"} name={"nickname"}
                                         placeholder={"Nickname"} errorMessage={errors.nickname}
                                         isTouched={touched.nickname}/>
                        </LabelWrapper>
                        <LabelWrapper htmlFor={"password_up"} text={"Password"}>
                            <CustomInput type={"password"} className={"input"} id={"password_up"} name={"password"}
                                         placeholder={"Password"} errorMessage={errors.password}
                                         isTouched={touched.password}/>
                        </LabelWrapper>
                        <Button type={"submit"} classes={"btn btn-outline-white btn_sign"} isDisabled={!isValid}>sign
                            up</Button>
                    </Form>
                }
            </Formik>
            <div className="switch">
                <p className="text">You have an account?</p>
                <NavLink to={"/sign-in"} className="switch_link custom_link">
                    <UseSvg spriteName={"full_arrow_left"} className={"full_arrow_icon"}/>
                    sign in
                </NavLink>
            </div>
        </div>
    )
}