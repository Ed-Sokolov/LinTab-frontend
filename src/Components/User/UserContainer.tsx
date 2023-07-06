import {User} from "./Component/User";
import {useAppDispatch, useAppSelector} from "../../Hooks/hooks";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {getUser} from "../../API/UserApi";

export const UserContainer = () => {
    let {user} = useAppSelector(state => state.user);

    const dispatch = useAppDispatch();

    const {id} = useParams();

    useEffect(() => {
        if (id && !isNaN(Number(id))) {
            dispatch(getUser(Number(id)))
        }
    }, [dispatch, id])

    return <User user={user}/>
}