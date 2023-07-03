import {Header} from "./Component/Header";
import {useAppDispatch, useAppSelector} from "../../Store/Hook/hook";
import {logOut} from "../../API/AuthApi";

export const HeaderContainer = () => {
    const {isAuth, profileId} = useAppSelector(state => state.auth);

    const dispatch = useAppDispatch();

    const handleLogOut = () => {
        dispatch(logOut())
    }

    return <Header isAuth={isAuth} profileId={profileId} handleLogOut={handleLogOut}/>
}