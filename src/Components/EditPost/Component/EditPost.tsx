import {FormPage} from "../../../Widgets/FormPage/FormPage";
import "./editPost.scss";
import {H3} from "../../../Widgets/Headings/H3/H3";
import {Form, Formik, FormikHelpers} from "formik";
import {EditPostFormTypes} from "../EditPostContainer";
import React from "react";
import {EditPostSchema} from "../Validation";
import {LabelWrapper} from "../../../Widgets/LabelWrapper/LabelWrapper";
import {CustomInput} from "../../../Widgets/CustomInput/CustomInput";
import {Button} from "../../../Widgets/Button/Button";

type EditPostTypes = {
    initValues: EditPostFormTypes;
    editPostSubmit: (values: EditPostFormTypes, actions: FormikHelpers<EditPostFormTypes>) => any;
}

export const EditPost: React.FC<EditPostTypes> = ({editPostSubmit, initValues}) => {
    return (
        <FormPage>
            <H3>Editing post</H3>
            <Formik initialValues={initValues} onSubmit={editPostSubmit} validationSchema={EditPostSchema}
                    validateOnMount={true}>
                {
                    ({errors, touched, isValid}) => <Form className={"form"}>
                        <LabelWrapper htmlFor={"title"} text={"Title"}>
                            <CustomInput id={"title"} name={"title"} placeholder={"Title"} errorMessage={errors.title}
                                         isTouched={touched.title} className={"input"}/>
                        </LabelWrapper>
                        <LabelWrapper htmlFor={"content"} text={"Content"}>
                            <CustomInput as={"textarea"} id={"content"} name={"content"} placeholder={"Content"}
                                         errorMessage={errors.content} isTouched={touched.content} className={"textarea"}/>
                        </LabelWrapper>
                        <div className="buttons">
                            <Button type={"button"} classes={"btn btn-outline-dark"}>cancel</Button>
                            <Button type={"submit"} classes={"btn btn-orange"} isDisabled={!isValid}>save changes</Button>
                        </div>
                    </Form>
                }
            </Formik>
        </FormPage>
    )
}