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
import {Remove} from "../../../Widgets/Remove/Remove";
import {ReactQuillWrapper} from "../../../Widgets/ReactQuillWrapper/ReactQuillWrapper";
import {ErrorField} from "../../../Widgets/ErrorField/ErrorField";
import {DropzoneWrapper} from "../../../Widgets/DropzoneWrapper/DropzoneWrapper";

type EditPostTypes = {
    initValues: EditPostFormTypes;
    editPostSubmit: (values: EditPostFormTypes, actions: FormikHelpers<EditPostFormTypes>) => any;
    handleDestroyPost: () => any;
    originalPhoto: {
        id: number;
        url: string;
    };
}

export const EditPost: React.FC<EditPostTypes> = ({editPostSubmit, initValues, handleDestroyPost, originalPhoto}) => {
    return (
        <FormPage>
            <H3>Editing post</H3>
            <Formik initialValues={initValues} onSubmit={editPostSubmit} validationSchema={EditPostSchema}
                    validateOnMount={true}>
                {
                    ({
                         errors, touched, isValid,
                         values, setFieldTouched, setFieldValue
                     }) => <Form className={"form"}>
                        <LabelWrapper htmlFor={"title"} text={"Title"}>
                            <CustomInput id={"title"} name={"title"} placeholder={"Title"} errorMessage={errors.title}
                                         isTouched={touched.title} className={"input"}/>
                        </LabelWrapper>
                        <LabelWrapper text={"Content"}>
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
                        <LabelWrapper htmlFor={"image"} text={"Change Image"}>
                            <DropzoneWrapper setFieldValue={setFieldValue} setFieldTouched={setFieldTouched}
                                             errorMessage={errors.image} isTouched={touched.image} file={values.image}
                                             isEdit originalImage={originalPhoto} id={"image"}
                            />
                        </LabelWrapper>
                        <div className="buttons">
                            <Button type={"button"} classes={"btn btn-outline-dark"}>cancel</Button>
                            <Button type={"submit"} classes={"btn btn-orange"} isDisabled={!isValid || (JSON.stringify(values) === JSON.stringify(initValues))}>save
                                changes</Button>
                        </div>
                    </Form>
                }
            </Formik>
            <Remove text={"remove this post"} onEvent={handleDestroyPost}/>
        </FormPage>
    )
}