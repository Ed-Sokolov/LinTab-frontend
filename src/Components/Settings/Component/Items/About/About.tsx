import {Field, Form, Formik} from "formik";
import React from "react";
import {Button} from "../../../../../Widgets/Button/Button";
import "./about.scss"
import {AboutTypes} from "../../../Types";

export const About: React.FC<AboutTypes> = ({initValuesAbout, handleSubmitAbout}) => {
    return (
        <Formik initialValues={initValuesAbout} onSubmit={handleSubmitAbout}>
            <Form className="form">
                <div className="form_group">
                    <label className="label" htmlFor="nickname">Nickname</label>
                    <Field type="text" name="nickname" id="nickname" className="input" placeholder="Nickname"/>
                </div>
                <div className="form_group">
                    <label className="label" htmlFor="name">Name</label>
                    <Field type="text" name="name" id="name" className="input" placeholder="Name"/>
                </div>
                <div className="form_group">
                    <label className="label" htmlFor="about">About you</label>
                    <Field as="textarea" name="about" id="about" className="textarea" placeholder="About you"/>
                </div>
                <Button type={"submit"} classes="btn btn-orange">apply</Button>
            </Form>
        </Formik>
    )
}