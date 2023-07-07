import "./createPost.scss"
import {Container} from "../../../Widgets/Container/Container";
import {H3} from "../../../Widgets/Headings/H3/H3";
import {Form, Formik, FormikHelpers} from "formik";
import {Button} from "../../../Widgets/Button/Button";
import {CustomInput} from "../../../Widgets/CustomInput/CustomInput";
import {LabelWrapper} from "../../../Widgets/LabelWrapper/LabelWrapper";
import {useAppDispatch, useAppSelector} from "../../../Hooks/hooks";
import {createPost} from "../../../API/PostApi";

export const CreatePost = () => {
    const dispatch = useAppDispatch();
    const {profileId} = useAppSelector(state => state.auth);

    const initValues = {
        title: '',
        content: ''
    }

    const createPostSubmit = (values: typeof initValues, actions: FormikHelpers<typeof initValues>) => {
        if (profileId) {
            const data = {
                title: values.title,
                content: values.content,
                author_id: profileId
            }
            dispatch(createPost(data))
        }
    }

    return (
        <div className="create_post">
            <Container>
                <div className="create_post_content">
                    <H3>Creating post</H3>
                    <Formik initialValues={initValues} onSubmit={createPostSubmit}>
                        <Form className="form">
                            <LabelWrapper htmlFor={"title"} text={"Title"}>
                                <CustomInput id={"title"} name={"title"} placeholder={"Title"}
                                             errorMessage={"something"} isTouched={true}/>
                            </LabelWrapper>
                            <LabelWrapper htmlFor={"content"} text={"Content"}>
                                <CustomInput as={"textarea"} className={"textarea"} id={"content"} name={"content"}
                                             placeholder={"Content"} errorMessage={"Something"} isTouched={true}/>
                            </LabelWrapper>
                            <div className="buttons">
                                <Button type={"button"} classes={"btn btn-outline-dark"}>cancel</Button>
                                <Button type={"submit"} classes={"btn btn-orange"}>create</Button>
                            </div>
                        </Form>
                    </Formik>
                </div>
            </Container>
        </div>
    )
}