import "./contact.scss";
import {Container} from "../../../Widgets/Container/Container";
import {H2} from "../../../Widgets/Headings/H2/H2";
import {Form, Formik, FormikHelpers} from "formik";
import {LabelWrapper} from "../../../Widgets/LabelWrapper/LabelWrapper";
import {CustomInput} from "../../../Widgets/CustomInput/CustomInput";
import {ReactQuillWrapper} from "../../../Widgets/ReactQuillWrapper/ReactQuillWrapper";
import React from "react";
import {Button} from "../../../Widgets/Button/Button";
import {ContactFormTypes} from "../ContactContainer";
import {ContactFormSchema} from "../Validation";
import {ErrorField} from "../../../Widgets/ErrorField/ErrorField";

type ContactTypes = {
    initValues: ContactFormTypes;
    handleSubmit: (values: ContactFormTypes, actions: FormikHelpers<ContactFormTypes>) => any
}

export const Contact: React.FC<ContactTypes> = ({initValues, handleSubmit}) => {
    return (
        <div className={"contact_page"}>
            <Container>
                <H2>Contact</H2>
                <Formik initialValues={initValues} onSubmit={handleSubmit} validationSchema={ContactFormSchema}
                        validateOnMount={true}>
                    {
                        ({
                             values, errors, touched,
                             setFieldValue, setFieldTouched, isValid
                         }) => <Form className={"contact_form"}>
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
            </Container>
        </div>
    )
}