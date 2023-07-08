import {Posts} from "./Component/Posts";
import {useAppDispatch, useAppSelector} from "../../Hooks/hooks";
import {useEffect} from "react";
import {getPosts} from "../../API/PostApi";

export const PostsContainer = () => {
    const {posts} = useAppSelector(state => state.post);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch])

    return posts ? <Posts posts={posts}/> : <></>;
}