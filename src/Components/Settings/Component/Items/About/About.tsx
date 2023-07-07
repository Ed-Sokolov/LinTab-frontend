import {Form, Formik} from "formik";
import React from "react";
import {Button} from "../../../../../Widgets/Button/Button";
import "./about.scss"
import {AboutTypes} from "../../../Types";
import {CustomInput} from "../../../../../Widgets/CustomInput/CustomInput";
import {LabelWrapper} from "../../../../../Widgets/LabelWrapper/LabelWrapper";

export const About: React.FC<AboutTypes> = ({initValuesAbout, handleSubmitAbout, AboutSchema}) => {
    return (
        <Formik initialValues={initValuesAbout} onSubmit={handleSubmitAbout} validationSchema={AboutSchema}
                enableReinitialize={true}>
            {
                ({errors, touched, isValid}) => <Form className="form">
                    <LabelWrapper htmlFor={"nickname"} text={"Nickname"}>
                        <CustomInput type={"text"} className={"input"} id={"nickname"} name={"nickname"}
                                     placeholder={"Nickname"} errorMessage={errors.nickname}
                                     isTouched={touched.nickname}/>
                    </LabelWrapper>
                    <LabelWrapper htmlFor={"name"} text={"Name"}>
                        <CustomInput type={"text"} className={"input"} id={"name"} name={"name"} placeholder={"Name"}
                                     errorMessage={errors.name} isTouched={touched.name}/>
                    </LabelWrapper>
                    <LabelWrapper htmlFor={"about"} text={"About you"}>
                        <CustomInput as={"textarea"} type={"text"} className={"textarea"} id={"about"} name={"about"}
                                     placeholder={"About you"} errorMessage={errors.about} isTouched={touched.about}/>
                    </LabelWrapper>
                    <Button type={"submit"} classes="btn btn-orange" isDisabled={!isValid}>apply</Button>
                </Form>
            }
        </Formik>
    )
}