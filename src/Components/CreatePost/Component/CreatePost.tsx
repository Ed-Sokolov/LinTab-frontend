import "./createPost.scss"
import {Container} from "../../../Widgets/Container/Container";
import {H3} from "../../../Widgets/Headings/H3/H3";
import {Form, Formik, FormikHelpers} from "formik";
import {Button} from "../../../Widgets/Button/Button";
import {CustomInput} from "../../../Widgets/CustomInput/CustomInput";
import {LabelWrapper} from "../../../Widgets/LabelWrapper/LabelWrapper";
import {CreatePostFormTypes} from "../CreatePostContainer";
import React from "react";
import {CreatePostSchema} from "../Validation";

type CreatePostTypes = {
    initValues: CreatePostFormTypes;
    createPostSubmit: (values: CreatePostFormTypes, actions: FormikHelpers<CreatePostFormTypes>) => any;
    CreatePostSchema: typeof CreatePostSchema
}

export const CreatePost: React.FC<CreatePostTypes> = ({createPostSubmit, initValues, CreatePostSchema}) => {
    return (
        <div className="create_post">
            <Container>
                <div className="create_post_content">
                    <H3>Creating post</H3>
                    <Formik initialValues={initValues} onSubmit={createPostSubmit} validationSchema={CreatePostSchema}
                            validateOnMount={true}>
                        {
                            ({errors, touched, isValid}) => <Form className="form">
                                <LabelWrapper htmlFor={"title"} text={"Title"}>
                                    <CustomInput id={"title"} name={"title"} placeholder={"Title"}
                                                 errorMessage={errors.title} isTouched={touched.title}/>
                                </LabelWrapper>
                                <LabelWrapper htmlFor={"content"} text={"Content"}>
                                    <CustomInput as={"textarea"} className={"textarea"} id={"content"} name={"content"}
                                                 placeholder={"Content"} errorMessage={errors.content}
                                                 isTouched={touched.content}/>
                                </LabelWrapper>
                                <div className="buttons">
                                    <Button type={"button"} classes={"btn btn-outline-dark"}>cancel</Button>
                                    <Button type={"submit"} classes={"btn btn-orange"}
                                            isDisabled={!isValid}>create</Button>
                                </div>
                            </Form>
                        }
                    </Formik>
                </div>
            </Container>
        </div>
    )
}