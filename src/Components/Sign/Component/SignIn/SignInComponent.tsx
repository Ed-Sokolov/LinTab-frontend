import {Button} from "../../../../Widgets/Button/Button";
import {NavLink} from "react-router-dom";
import {UseSvg} from "../../../../Widgets/UseSvg/UseSvg";
import React from "react";
import {Form, Formik, FormikHelpers} from "formik";
import {useAppDispatch} from "../../../../Hooks/hooks";
import {login} from "../../../../API/AuthApi";
import {SignInSchema} from "../../Validation/SignIn";
import {CustomInput} from "../../../../Widgets/CustomInput/CustomInput";
import {LabelWrapper} from "../../../../Widgets/LabelWrapper/LabelWrapper";
import {H3} from "../../../../Widgets/Headings/H3/H3";

type SignInTypes = {
    email: string;
    password: string
}

export const SignInComponent: React.FC = () => {
    const dispatch = useAppDispatch();

    const initValues: SignInTypes = {
        email: '',
        password: ''
    }

    const signIn = (values: SignInTypes, actions: FormikHelpers<SignInTypes>) => {
        dispatch(login(values))
            .catch(error => {
                for (const errorKey in error.errors) {
                    actions.setFieldError(errorKey, error.errors[errorKey][0])
                }
            })
    }

    return (
        <div className="sign__content">
            <H3>Sign In</H3>
            <Formik initialValues={initValues} onSubmit={signIn} validationSchema={SignInSchema} validateOnMount={true}>
                {
                    ({errors, touched, isValid}) => <Form className="sign_form">
                        <LabelWrapper htmlFor={"email_in"} text={"Email"}>
                            <CustomInput type={"email"} className={"input"} id={"email_in"} name={"email"}
                                         placeholder={"Email"} errorMessage={errors.email} isTouched={touched.email}/>
                        </LabelWrapper>
                        <LabelWrapper htmlFor={"password_in"} text={"Password"}>
                            <CustomInput type={"password"} className={"input"} id={"password_in"} name={"password"}
                                         placeholder={"Password"} errorMessage={errors.password}
                                         isTouched={touched.password}/>
                        </LabelWrapper>
                        <Button type={"submit"} classes={"btn btn-outline-white btn_sign"} isDisabled={!isValid}>sign
                            in</Button>
                    </Form>
                }
            </Formik>
            <div className="switch">
                <p className="text">You are here at the first time?</p>
                <NavLink to={"/sign-up"} className="switch_link custom_link">
                    sign up
                    <UseSvg spriteName={"full_arrow_right"} className={"full_arrow_icon"}/>
                </NavLink>
            </div>
        </div>
    )
}