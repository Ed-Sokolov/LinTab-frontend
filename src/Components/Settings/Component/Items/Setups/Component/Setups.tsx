import "./setups.scss";
import {Field, Form, Formik} from "formik";
import {LabelWrapper} from "../../../../../../Widgets/LabelWrapper/LabelWrapper";
import {CustomInput} from "../../../../../../Widgets/CustomInput/CustomInput";
import {Button} from "../../../../../../Widgets/Button/Button";
import {ChangePasswordSchema} from "../../../../Validation/Setups";
import React from "react";
import {SetupsTypes} from "../../../../Types";
import {Remove} from "../../../../../../Widgets/Remove/Remove";

export const Setups: React.FC<SetupsTypes> = ({initValues, handleSubmit, handleDestroyUser}) => {
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
                            <Field hidden type='text' autoComplete={'nickname'}/>
                            <LabelWrapper htmlFor={"old_password"} text={"Old password"}>
                                <CustomInput id={"old_password"} name={"old_password"} placeholder={"Old password"}
                                             errorMessage={errors.old_password} isTouched={touched.old_password}
                                             type={"password"} as={"input"}/>
                            </LabelWrapper>
                            <div className="form_groups">
                                <LabelWrapper htmlFor={"new_password"} text={"New password"}>
                                    <CustomInput id={"new_password"} name={"new_password"} placeholder={"New password"}
                                                 errorMessage={errors.new_password} isTouched={touched.new_password}
                                                 type={"password"} as={"input"}/>
                                </LabelWrapper>
                                <LabelWrapper htmlFor={"new_password_confirmation"} text={"Confirm password"}>
                                    <CustomInput id={"new_password_confirmation"} name={"new_password_confirmation"}
                                                 placeholder={"Confirm password"} as={"input"}
                                                 errorMessage={errors.new_password_confirmation}
                                                 isTouched={touched.new_password_confirmation} type={"password"}/>
                                </LabelWrapper>
                            </div>
                            <Button type={"submit"} classes={"btn btn-outline-dark"}
                                    isDisabled={!isValid}>CHANGE</Button>
                        </Form>
                    }
                </Formik>
            </div>
            <Remove text={"delete this account"} onEvent={handleDestroyUser}/>
        </div>
    )
}