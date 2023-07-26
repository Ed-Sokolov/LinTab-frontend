import "./contact.scss";
import {Container} from "../../../Widgets/Container/Container";
import {H2} from "../../../Widgets/Headings/H2/H2";
import {Form, Formik} from "formik";
import {LabelWrapper} from "../../../Widgets/LabelWrapper/LabelWrapper";
import {CustomInput} from "../../../Widgets/CustomInput/CustomInput";
import {ReactQuillWrapper} from "../../../Widgets/ReactQuillWrapper/ReactQuillWrapper";
import React from "react";
import {Button} from "../../../Widgets/Button/Button";

export const Contact = () => {
    const values = {
        name: '',
        email: '',
        message: ''
    }

    const handleSubmit = (values: any, actions: any) => {
        console.log(values);
    }

    return (
        <div className={"contact_page"}>
            <Container>
                <H2>Contact</H2>
                <Formik initialValues={values} onSubmit={handleSubmit}>
                    {
                        ({setFieldValue, setFieldTouched}) => <Form className={"contact_form"}>
                            <div className="group_line">
                                <LabelWrapper text={'Email'}>
                                    <CustomInput id={'email'} name={'email'} placeholder={'Email'} errorMessage={''}
                                                 isTouched={false}/>
                                </LabelWrapper>
                                <LabelWrapper text={'Name'}>
                                    <CustomInput id={'name'} name={'name'} placeholder={'Name'} errorMessage={''}
                                                 isTouched={false}/>
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
                                </div>
                            </LabelWrapper>
                            <Button type={"submit"} classes={"btn btn-outline-dark"}>SEND</Button>
                        </Form>
                    }
                </Formik>
            </Container>
        </div>
    )
}