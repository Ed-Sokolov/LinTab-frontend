import "./createPost.scss"
import {H3} from "../../../Widgets/Headings/H3/H3";
import {Form, Formik, FormikHelpers} from "formik";
import {Button} from "../../../Widgets/Button/Button";
import {CustomInput} from "../../../Widgets/CustomInput/CustomInput";
import {LabelWrapper} from "../../../Widgets/LabelWrapper/LabelWrapper";
import {CreatePostFormTypes} from "../CreatePostContainer";
import React from "react";
import {CreatePostSchema} from "../Validation";
import {FormPage} from "../../../Widgets/FormPage/FormPage";
import {ReactQuillWrapper} from "../../../Widgets/ReactQuillWrapper/ReactQuillWrapper";
import {ErrorField} from "../../../Widgets/ErrorField/ErrorField";
import {DropzoneWrapper} from "../../../Widgets/DropzoneWrapper/DropzoneWrapper";

type CreatePostTypes = {
    initValues: CreatePostFormTypes;
    createPostSubmit: (values: CreatePostFormTypes, actions: FormikHelpers<CreatePostFormTypes>) => any;
    CreatePostSchema: typeof CreatePostSchema
}

export const CreatePost: React.FC<CreatePostTypes> = ({createPostSubmit, initValues, CreatePostSchema}) => {
    return (
        <FormPage>
            <H3>Creating post</H3>
            <Formik initialValues={initValues} onSubmit={createPostSubmit} validationSchema={CreatePostSchema}
                    validateOnMount={true}>
                {
                    ({
                         errors, touched, isValid,
                         values, setFieldValue, setFieldTouched
                     }) => <Form className="form">
                        <LabelWrapper htmlFor={"title"} text={"Title"}>
                            <CustomInput id={"title"} name={"title"} placeholder={"Title"}
                                         errorMessage={errors.title} isTouched={touched.title}/>
                        </LabelWrapper>
                        <LabelWrapper htmlFor={"content"} text={"Content"}>
                            <div className="input_wrapper">
                                <ReactQuillWrapper
                                    value={values.content}
                                    setFieldValue={setFieldValue}
                                    id={"content"}
                                    placeholder={"Content"}
                                    setFieldTouched={setFieldTouched}
                                />
                                {(errors.content && touched.content) && <ErrorField message={errors.content}/>}
                            </div>
                        </LabelWrapper>
                        <LabelWrapper htmlFor={"image"} text={"Upload photo"}>
                            <DropzoneWrapper setFieldValue={setFieldValue} setFieldTouched={setFieldTouched}
                                             errorMessage={errors.image} isTouched={touched.image}
                                             file={values.image}/>
                        </LabelWrapper>
                        <div className="buttons">
                            <Button type={"button"} classes={"btn btn-outline-dark"}>cancel</Button>
                            <Button type={"submit"} classes={"btn btn-orange"}
                                    isDisabled={!isValid}>create</Button>
                        </div>
                    </Form>
                }
            </Formik>
        </FormPage>
    )
}