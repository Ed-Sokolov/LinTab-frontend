import {Post} from "./Component/Post";
import {useGetPost} from "../../Hooks/hooks";

export const PostContainer = () => {
    const post = useGetPost();

    return post ? <Post {...post}/> : <></>;
}