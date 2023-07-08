import {EditPost} from "./Component/EditPost";
import {useGetPost} from "../../Hooks/hooks";

type EditPostFormTypes = {
    title: string;
    content: string;
}

export const EditPostContainer = () => {
    const post = useGetPost();

    return <EditPost/>
}