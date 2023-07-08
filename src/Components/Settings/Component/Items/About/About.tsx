import {Form, Formik} from "formik";
import React from "react";
import {Button} from "../../../../../Widgets/Button/Button";
import "./about.scss"
import {AboutTypes} from "../../../Types";
import {CustomInput} from "../../../../../Widgets/CustomInput/CustomInput";
import {LabelWrapper} from "../../../../../Widgets/LabelWrapper/LabelWrapper";
import {ReactQuillWrapper} from "../../../../../Widgets/ReactQuillWrapper/ReactQuillWrapper";
import {ErrorField} from "../../../../../Widgets/ErrorField/ErrorField";

export const About: React.FC<AboutTypes> = ({initValuesAbout, handleSubmitAbout, AboutSchema}) => {
    return (
        <Formik initialValues={initValuesAbout} onSubmit={handleSubmitAbout} validationSchema={AboutSchema}
                enableReinitialize={true}>
            {
                ({
                     errors, touched, isValid,
                     values, setFieldValue, setFieldTouched
                }) => <Form className="form">
                    <LabelWrapper htmlFor={"nickname"} text={"Nickname"}>
                        <CustomInput type={"text"} className={"input"} id={"nickname"} name={"nickname"}
                                     placeholder={"Nickname"} errorMessage={errors.nickname}
                                     isTouched={touched.nickname}/>
                    </LabelWrapper>
                    <LabelWrapper htmlFor={"name"} text={"Name"}>
                        <CustomInput type={"text"} className={"input"} id={"name"} name={"name"} placeholder={"Name"}
                                     errorMessage={errors.name} isTouched={touched.name}/>
                    </LabelWrapper>
                    <LabelWrapper htmlFor={"content"} text={"Content"}>
                        <div className="input_wrapper">
                            <ReactQuillWrapper
                                value={values.about}
                                change={(e: any) => setFieldValue('about', e)}
                                id={"about"}
                                placeholder={"Content"}
                                blur={() => setFieldTouched('about', true)}
                            />
                            {(errors.about && touched.about) && <ErrorField message={errors.about}/>}
                        </div>
                    </LabelWrapper>
                    <Button type={"submit"} classes="btn btn-orange" isDisabled={!isValid}>apply</Button>
                </Form>
            }
        </Formik>
    )
}