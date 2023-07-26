import {Form, Formik, FormikHelpers} from "formik";
import React from "react";
import {LabelWrapper} from "../../LabelWrapper/LabelWrapper";
import {CustomInput} from "../../CustomInput/CustomInput";
import {ReactQuillWrapper} from "../../ReactQuillWrapper/ReactQuillWrapper";
import {ErrorField} from "../../ErrorField/ErrorField";
import {Button} from "../../Button/Button";
import {FeedbackFormSchema} from "../Validation";
import {FeedbackFormTypes} from "../LeaveFeedbackContainer";
import "./leaveFeedback.scss";

type FeedbackTypes = {
    initValues: FeedbackFormTypes;
    handleSubmit: (values: FeedbackFormTypes, actions: FormikHelpers<FeedbackFormTypes>) => any
}

export const LeaveFeedback: React.FC<FeedbackTypes> = ({initValues, handleSubmit}) => {
    return (
        <Formik initialValues={initValues} onSubmit={handleSubmit} validationSchema={FeedbackFormSchema}
                validateOnMount={true}>
            {
                ({
                     values, errors, touched,
                     setFieldValue, setFieldTouched, isValid
                 }) => <Form className={"feedback_form"}>
                    <div className="group_line">
                        <LabelWrapper htmlFor={'email'} text={'Email'}>
                            <CustomInput id={'email'} name={'email'} placeholder={'Email'} errorMessage={errors.email}
                                         isTouched={touched.email}/>
                        </LabelWrapper>
                        <LabelWrapper htmlFor={'name'} text={'Name'}>
                            <CustomInput id={'name'} name={'name'} placeholder={'Name'} errorMessage={errors.name}
                                         isTouched={touched.name}/>
                        </LabelWrapper>
                    </div>
                    <LabelWrapper text={'Message'}>
                        <div className="input_wrapper">
                            <ReactQuillWrapper
                                value={values.message}
                                setFieldValue={setFieldValue}
                                id={"message"}
                                placeholder={"Message"}
                                setFieldTouched={setFieldTouched}
                                field={"message"}
                            />
                            {(errors.message && touched.message) && <ErrorField message={errors.message}/>}
                        </div>
                    </LabelWrapper>
                    <Button type={"submit"} classes={"btn btn-outline-dark"} isDisabled={!isValid}>SEND</Button>
                </Form>
            }
        </Formik>
    )
}