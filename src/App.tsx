import {Routing} from "./Router/Router";
import {useEffect} from "react";
import Aos from "aos";
import 'aos/dist/aos.css';
import {useAppDispatch} from "./Store/Hook/hook";
import {checkAuth} from "./API/AuthApi";

export const App = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(checkAuth());

        Aos.init({
            duration: 1000
        })
    }, [dispatch])

    return <Routing/>
}