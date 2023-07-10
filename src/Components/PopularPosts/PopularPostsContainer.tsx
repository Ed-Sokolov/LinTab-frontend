import {PopularPosts} from "./Component/PopularPosts";
import {useAppDispatch, useAppSelector} from "../../Hooks/hooks";
import {useEffect} from "react";
import {getPopularPosts} from "../../API/PostApi";

export const PopularPostsContainer = () => {
    const {posts} = useAppSelector(state => state.post);
    const {isAuth} = useAppSelector(state => state.auth);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getPopularPosts())
    }, [dispatch])

    return posts ? <PopularPosts posts={posts} isAuth={isAuth}/> : <></>;
}