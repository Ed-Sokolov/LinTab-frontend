import {H2} from "../../../../Widgets/Headings/H2/H2";
import {Button} from "../../../../Widgets/Button/Button";
import {NavLink} from "react-router-dom";
import {UseSvg} from "../../../../Widgets/UseSvg/UseSvg";
import React from "react";
import {Field, Form, Formik, FormikHelpers} from "formik";
import {useAppDispatch} from "../../../../Hooks/hooks";
import {login} from "../../../../API/AuthApi";
import {SignInSchema} from "../../Validation/SignIn";
import {ErrorField} from "../../../../Widgets/ErrorField/ErrorField";

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
            <H2>Sign In</H2>
            <Formik initialValues={initValues} onSubmit={signIn} validationSchema={SignInSchema} validateOnMount={true}>
                {
                    ({errors, touched, isValid}) => <Form className="sign_form">
                        <div className="form_group">
                            <label className="label" htmlFor="email_in">Email</label>
                            <div className="input_wrapper">
                                <Field type="text" id="email_in" name="email" className="input" placeholder="Email"/>
                                {(errors.email && touched.email) && <ErrorField message={errors.email}/>}
                            </div>
                        </div>
                        <div className="form_group">
                            <label className="label" htmlFor="password_in">Password</label>
                            <div className="input_wrapper">
                                <Field type="password" id="password_in" name="password" className="input"
                                       placeholder="Password"/>
                                {(errors.password && touched.password) && <ErrorField message={errors.password}/>}
                            </div>
                        </div>
                        <Button type={"submit"} classes={"btn btn-outline-white btn_sign"} isDisabled={!isValid}>sign
                            in</Button>
                    </Form>
                }
            </Formik>
            <div className="switch">
                <p className="text">You are here at the first time?</p>
                <NavLink to={"/sign-up"} className="switch_link">
                    sign up
                    <UseSvg spriteName={"full_arrow_right"} className={"full_arrow_icon"}/>
                </NavLink>
            </div>
        </div>
    )
}