import {EditPost} from "./Component/EditPost";
import {useAppDispatch, useGetPost} from "../../Hooks/hooks";
import {FormikHelpers} from "formik";
import {destroyPost, updatePost} from "../../API/PostApi";

export type EditPostFormTypes = {
    title: string;
    content: string;
    image: File | null;
}

export const EditPostContainer = () => {
    const dispatch = useAppDispatch();
    const post = useGetPost();

    const initValues: EditPostFormTypes = {
        title: post ? post.title : '',
        content: post ? post.content : '',
        image: null
    };

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

    const handleDestroyPost = () => {
        if (post) {
            dispatch(destroyPost(post.id))
                .catch(error => {
                    console.log(error);
                });
        }
    }

    return post ?
        <EditPost initValues={initValues} editPostSubmit={editPostSubmit}
                  handleDestroyPost={handleDestroyPost} originalPhoto={post.image}
        /> : <></>
}