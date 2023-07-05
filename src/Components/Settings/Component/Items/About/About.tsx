import {Field, Form, Formik} from "formik";
import React from "react";
import {Button} from "../../../../../Widgets/Button/Button";
import "./about.scss"
import {AboutTypes} from "../../../Types";
import {ErrorField} from "../../../../../Widgets/ErrorField/ErrorField";

export const About: React.FC<AboutTypes> = ({initValuesAbout, handleSubmitAbout, AboutSchema}) => {
    return (
        <Formik initialValues={initValuesAbout} onSubmit={handleSubmitAbout} validationSchema={AboutSchema}>
            {
                ({errors, touched}) => <Form className="form">
                    <div className="form_group">
                        <label className="label" htmlFor="nickname">Nickname</label>
                        <div className="input_wrapper">
                            <Field type="text" name="nickname" id="nickname" className="input" placeholder="Nickname"/>
                            {(errors.nickname && touched.nickname) && <ErrorField message={errors.nickname}/>}
                        </div>
                    </div>
                    <div className="form_group">
                        <label className="label" htmlFor="name">Name</label>
                        <div className="input_wrapper">
                            <Field type="text" name="name" id="name" className="input" placeholder="Name"/>
                            {(errors.name && touched.name) && <ErrorField message={errors.name}/>}
                        </div>
                    </div>
                    <div className="form_group">
                        <label className="label" htmlFor="about">About you</label>
                        <div className="input_wrapper">
                            <Field as="textarea" name="about" id="about" className="textarea" placeholder="About you"/>
                            {(errors.about && touched.about) && <ErrorField message={errors.about}/>}
                        </div>
                    </div>
                    <Button type={"submit"} classes="btn btn-orange">apply</Button>
                </Form>
            }
        </Formik>
    )
}