import "./setups.scss";
import {Form, Formik} from "formik";
import {LabelWrapper} from "../../../../../../Widgets/LabelWrapper/LabelWrapper";
import {CustomInput} from "../../../../../../Widgets/CustomInput/CustomInput";
import {Button} from "../../../../../../Widgets/Button/Button";
import {ChangePasswordSchema} from "../../../../Validation/Setups";
import React from "react";
import {SetupsTypes} from "../../../../Types";

export const Setups: React.FC<SetupsTypes> = ({initValues, handleSubmit}) => {
    return (
        <div className={"setups"}>
            <div className="change_password_field">
                <h4 className={"setups_title"}>Change password</h4>
                <Formik initialValues={initValues} onSubmit={handleSubmit} validationSchema={ChangePasswordSchema}
                        validateOnMount={true}>
                    {
                        ({
                             errors, touched, isValid
                         }) => <Form className={"change_password_form"}>
                            <LabelWrapper htmlFor={"old_password"} text={"Old password"}>
                                <CustomInput id={"old_password"} name={"old_password"} placeholder={"Old password"}
                                             errorMessage={errors.old_password} isTouched={touched.old_password}
                                             type={"password"}/>
                            </LabelWrapper>
                            <div className="new_password_wrapper">
                                <LabelWrapper htmlFor={"new_password"} text={"New password"}>
                                    <CustomInput id={"new_password"} name={"new_password"} placeholder={"New password"}
                                                 errorMessage={errors.new_password} isTouched={touched.new_password}
                                                 type={"password"}/>
                                </LabelWrapper>
                                <LabelWrapper htmlFor={"password_confirmation"} text={"Confirm password"}>
                                    <CustomInput id={"password_confirmation"} name={"password_confirmation"}
                                                 placeholder={"Confirm password"}
                                                 errorMessage={errors.password_confirmation}
                                                 isTouched={touched.password_confirmation} type={"password"}/>
                                </LabelWrapper>
                            </div>
                            <Button type={"submit"} classes={"btn btn-outline-dark"}
                                    isDisabled={!isValid}>CHANGE</Button>
                        </Form>
                    }
                </Formik>
            </div>
        </div>
    )
}