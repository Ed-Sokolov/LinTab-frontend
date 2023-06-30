import {Routing} from "./Router/Router";
import {useEffect} from "react";
import Aos from "aos";
import 'aos/dist/aos.css';

export const App = () => {
    useEffect(() => {
        Aos.init({
            duration: 1000
        })
    }, [])

    return <Routing/>
}