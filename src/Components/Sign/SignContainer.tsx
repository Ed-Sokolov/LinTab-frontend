import {Sign} from "./Component/Sign";
import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";

export const SignContainer = () => {
    let [page, setPage] = useState<'sign-in' | 'sign-up' | 'none'>('none');

    const pathname = useLocation().pathname;

    useEffect(() => {
        switch (pathname) {
            case '/sign-in':
                setPage('sign-in');
                break;
            case '/sign-up':
                setPage('sign-up');
                break;
        }

    }, [pathname])

    return <Sign pageName={page}/>
}