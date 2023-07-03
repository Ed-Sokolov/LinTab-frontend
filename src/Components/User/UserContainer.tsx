import {User} from "./Component/User";
import {useAppDispatch} from "../../Store/Hook/hook";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {getUser} from "../../API/UserApi";

export const UserContainer = () => {
    const dispatch = useAppDispatch();

    const {id} = useParams();

    useEffect(() => {
        if (id && !isNaN(Number(id))) {
            dispatch(getUser(Number(id)))
        }
    }, [dispatch, id])

    return <User/>
}