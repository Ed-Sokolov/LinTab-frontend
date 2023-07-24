import {Posts} from "./Component/Posts";
import {useAppDispatch, useAppSelector} from "../../Hooks/hooks";
import {useEffect} from "react";
import {getPosts} from "../../API/PostApi";
import {useSearchParams} from "react-router-dom";

export const PostsContainer = () => {
    const {posts} = useAppSelector(state => state.post);
    const dispatch = useAppDispatch();

    const [searchedParams] = useSearchParams();

    searchedParams.forEach((value, key) => console.log(key, value));

    useEffect(() => {
        dispatch(getPosts(searchedParams))
    }, [dispatch, searchedParams])

    return posts ? <Posts posts={posts}/> : <></>;
}