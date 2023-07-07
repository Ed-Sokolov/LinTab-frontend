import {Form, Formik} from "formik";
import React from "react";
import {Button} from "../../../../../Widgets/Button/Button";
import "./about.scss"
import {AboutTypes} from "../../../Types";
import {CustomInput} from "../../../../../Widgets/CustomInput/CustomInput";

export const About: React.FC<AboutTypes> = ({initValuesAbout, handleSubmitAbout, AboutSchema}) => {
    return (
        <Formik initialValues={initValuesAbout} onSubmit={handleSubmitAbout} validationSchema={AboutSchema}
                enableReinitialize={true}>
            {
                ({errors, touched, isValid}) => <Form className="form">
                    <div className="form_group">
                        <label className="label" htmlFor="nickname">Nickname</label>
                        <CustomInput type={"text"} className={"input"} id={"nickname"} name={"nickname"}
                                     placeholder={"Nickname"} errorMessage={errors.nickname}
                                     isTouched={touched.nickname}/>
                    </div>
                    <div className="form_group">
                        <label className="label" htmlFor="name">Name</label>
                        <CustomInput type={"text"} className={"input"} id={"name"} name={"name"} placeholder={"Name"}
                                     errorMessage={errors.name} isTouched={touched.name}/>
                    </div>
                    <div className="form_group">
                        <label className="label" htmlFor="about">About you</label>
                        <CustomInput as={"textarea"} type={"text"} className={"textarea"} id={"about"} name={"about"}
                                     placeholder={"About you"} errorMessage={errors.about} isTouched={touched.about}/>
                    </div>
                    <Button type={"submit"} classes="btn btn-orange" isDisabled={!isValid}>apply</Button>
                </Form>
            }
        </Formik>
    )
}