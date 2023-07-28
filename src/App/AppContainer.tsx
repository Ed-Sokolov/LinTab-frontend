import {useEffect} from "react";
import {useAppDispatch} from "../Hooks/hooks";
import {checkAuth} from "../API/AuthApi";
import Aos from "aos";
import {App} from "./App";
import {useLocation} from "react-router-dom";
import {AdminApp} from "../AdminPanel/AdminApp/AdminApp";

export const AppContainer = () => {
    const dispatch = useAppDispatch();

    const paths = useLocation().pathname.slice(1).split('/');

    useEffect(() => {
        dispatch(checkAuth());

        Aos.init({
            duration: 1000
        })
    }, [dispatch])

    return paths[0] === 'admin' ? <AdminApp/> : <App/>
}