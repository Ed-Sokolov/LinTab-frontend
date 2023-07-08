import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../Store";
import {useEffect, useState} from "react";
import {useLocation, useParams} from "react-router-dom";
import {getPost} from "../API/PostApi";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useIsShowComponent = () => {
    let [isShowComponent, setIsShowComponent] = useState<boolean>(true);

    let pathname = useLocation().pathname;

    useEffect(() => {
        switch (pathname) {
            case '/sign-in':
            case '/sign-up':
                setIsShowComponent(false);
                break;
            default:
                setIsShowComponent(true);
                break;
        }
    }, [pathname])

    return isShowComponent;
}

export const useGetPost = () => {
    const {post} = useAppSelector(state => state.post);
    const dispatch = useAppDispatch();

    const {id} = useParams();

    useEffect(() => {
        if (id && !isNaN(Number(id))) {
            dispatch(getPost(Number(id)));
        }
    }, [dispatch, id])

    return post;
}