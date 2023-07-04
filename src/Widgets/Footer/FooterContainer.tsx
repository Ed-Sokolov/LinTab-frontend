import {Footer} from "./Component/Footer";
import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";

export const FooterContainer = () => {
    let [showFooter, setShowFooter] = useState<boolean | 'load'>('load');

    let pathname = useLocation().pathname;

    useEffect(() => {
        switch (pathname) {
            case '/sign-in':
            case '/sign-up':
                setShowFooter(false);
                break;
            default:
                setShowFooter(true);
                break;
        }
    }, [pathname])

    return showFooter ? <Footer/> : <></>
}