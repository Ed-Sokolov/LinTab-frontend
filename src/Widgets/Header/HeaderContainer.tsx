import {Header} from "./Component/Header";
import {useAppDispatch, useAppSelector} from "../../Store/Hook/hook";
import {logOut} from "../../API/AuthApi";

export const HeaderContainer = () => {
    const isAuth = useAppSelector(state => state.auth.isAuth);

    const dispatch = useAppDispatch();

    const handleLogOut = () => {
        dispatch(logOut())
    }

    return <Header isAuth={isAuth} handleLogOut={handleLogOut}/>
}