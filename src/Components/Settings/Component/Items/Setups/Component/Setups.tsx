import "./setups.scss";
import {Form, Formik, FormikHelpers} from "formik";
import {LabelWrapper} from "../../../../../../Widgets/LabelWrapper/LabelWrapper";
import {CustomInput} from "../../../../../../Widgets/CustomInput/CustomInput";
import {Button} from "../../../../../../Widgets/Button/Button";

export const Setups = () => {
    const initValues = {
        old_password: '',
        new_password: '',
        confirmed_password: ''
    }

    const handleSubmit = (values: typeof initValues, actions: FormikHelpers<typeof initValues>) => {
        console.log(values);
    }

    return (
        <div className={"setups"}>
            <div className="change_password_field">
                <h4 className={"setups_title"}>Change password</h4>
                <Formik initialValues={initValues} onSubmit={handleSubmit}>
                    {
                        ({errors, touched}) => <Form className={"change_password_form"}>
                            <LabelWrapper htmlFor={"old_password"} text={"Old password"}>
                                <CustomInput id={"old_password"} name={"old_password"} placeholder={"Old password"}
                                             errorMessage={errors.old_password} isTouched={touched.old_password}/>
                            </LabelWrapper>
                            <div className="new_password_wrapper">
                                <LabelWrapper htmlFor={"new_password"} text={"New password"}>
                                    <CustomInput id={"new_password"} name={"new_password"} placeholder={"New password"}
                                                 errorMessage={errors.new_password} isTouched={touched.new_password}/>
                                </LabelWrapper>
                                <LabelWrapper htmlFor={"confirmed_password"} text={"Confirm password"}>
                                    <CustomInput id={"confirmed_password"} name={"confirmed_password"}
                                                 placeholder={"Confirm password"}
                                                 errorMessage={errors.confirmed_password}
                                                 isTouched={touched.confirmed_password}/>
                                </LabelWrapper>
                            </div>
                            <Button type={"submit"} classes={"btn btn-outline-dark"}>CHANGE</Button>
                        </Form>
                    }
                </Formik>
            </div>
        </div>
    )
}