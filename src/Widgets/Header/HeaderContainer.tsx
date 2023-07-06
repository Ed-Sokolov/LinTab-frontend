import {Header} from "./Component/Header";
import {useAppDispatch, useAppSelector, useIsShowComponent} from "../../Hooks/hooks";
import {logOut} from "../../API/AuthApi";

export const HeaderContainer = () => {
    let isShowComponent = useIsShowComponent();
    const {isAuth, profileId} = useAppSelector(state => state.auth);

    const dispatch = useAppDispatch();

    const handleLogOut = () => {
        dispatch(logOut())
    }

    return <Header isAuth={isAuth} profileId={profileId} handleLogOut={handleLogOut} isShowComponent={isShowComponent}/>
}