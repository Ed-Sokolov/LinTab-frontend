import {EditPost} from "./Component/EditPost";
import {useGetPost} from "../../Hooks/hooks";
import {FormikHelpers} from "formik";

export type EditPostFormTypes = {
    title: string;
    content: string;
}

export const EditPostContainer = () => {
    const post = useGetPost();

    const initValues: EditPostFormTypes = {
        title: post ? post.title : '',
        content: post ? post.content : ''
    }

    const editPostSubmit = (values: EditPostFormTypes, actions: FormikHelpers<EditPostFormTypes>) => {
        console.log(values);
    }

    return post ? <EditPost initValues={initValues} editPostSubmit={editPostSubmit}/> : <></>
}