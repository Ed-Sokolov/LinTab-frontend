import {useEffect} from "react";
import {useAppDispatch} from "../Store/Hook/hook";
import {checkAuth} from "../API/AuthApi";
import Aos from "aos";
import {App} from "./App";

export const AppContainer = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(checkAuth());

        Aos.init({
            duration: 1000
        })
    }, [dispatch])

    return <App/>
}