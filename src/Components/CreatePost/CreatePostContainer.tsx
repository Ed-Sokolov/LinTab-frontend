import {CreatePost} from "./Component/CreatePost";
import {useAppDispatch, useAppSelector} from "../../Hooks/hooks";
import {FormikHelpers} from "formik";
import {createPost} from "../../API/PostApi";
import {CreatePostSchema} from "./Validation";
import {useNavigate} from "react-router-dom";

export type CreatePostFormTypes = {
    title: string,
    content: string,
    image: File | null
}

export const CreatePostContainer = () => {
    const dispatch = useAppDispatch();
    const {profileId} = useAppSelector(state => state.auth);

    const navigate = useNavigate();

    const initValues: CreatePostFormTypes = {
        title: '',
        content: '',
        image: null
    }

    const createPostSubmit = (values: CreatePostFormTypes, actions: FormikHelpers<CreatePostFormTypes>) => {
        if (profileId) {
            const data = {
                title: values.title,
                content: values.content,
                image: values.image,
                author_id: profileId
            }
            dispatch(createPost(data))
                .then(response => {
                    navigate(`/posts/${response.payload}`)
                })
                .catch(error => {
                    for (const errorKey in error.errors) {
                        actions.setFieldError(errorKey, error.errors[errorKey][0]);
                    }
                })
        }
    }

    return <CreatePost initValues={initValues} createPostSubmit={createPostSubmit} CreatePostSchema={CreatePostSchema}/>
}