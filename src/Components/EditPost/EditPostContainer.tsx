import {EditPost} from "./Component/EditPost";
import {useAppDispatch, useGetPost} from "../../Hooks/hooks";
import {FormikHelpers} from "formik";
import {updatePost} from "../../API/PostApi";

export type EditPostFormTypes = {
    title: string;
    content: string;
}

export const EditPostContainer = () => {
    const dispatch = useAppDispatch();
    const post = useGetPost();

    const initValues: EditPostFormTypes = {
        title: post ? post.title : '',
        content: post ? post.content : ''
    }

    const editPostSubmit = (values: EditPostFormTypes, actions: FormikHelpers<EditPostFormTypes>) => {
        if (post) {
            const data = {
                id: post.id,
                postData: values
            }

            dispatch(updatePost(data))
                .catch(error => {
                    console.log(error);
                });
        }
    }

    return post ? <EditPost initValues={initValues} editPostSubmit={editPostSubmit}/> : <></>
}