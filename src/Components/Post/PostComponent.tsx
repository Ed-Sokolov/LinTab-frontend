import {Post} from "./Component/Post";
import {useAppDispatch, useAppSelector} from "../../Hooks/hooks";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {getPost} from "../../API/PostApi";

export const PostContainer = () => {
    const {post} = useAppSelector(state => state.post);
    const dispatch = useAppDispatch();

    const {id} = useParams();

    useEffect(() => {
        if (id && !isNaN(Number(id))) {
            dispatch(getPost(Number(id)));
        }
    }, [dispatch, id])

    return post ? <Post {...post}/> : <></>;
}