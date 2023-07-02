import {useEffect, useState} from "react";
import {Route, Routes, useLocation} from "react-router-dom";
import {HeaderContainer} from "../Widgets/Header/HeaderContainer";
import {Footer} from "../Widgets/Footer/Footer";
import {Main} from "../Pages/Main/Main";
import {Posts} from "../Pages/Posts/Posts";
import {Post} from "../Pages/Post/Post";
import {Sign} from "../Pages/Sign/Sign";

export const Routing = () => {
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

    return (
        <div>
            <HeaderContainer/>
            <Routes>
                <Route path={'/'} element={<Main/>}/>
                <Route path={'/posts'} element={<Posts/>}/>
                <Route path={'/posts/:id'} element={<Post/>}/>
                <Route path={'/sign-in'} element={<Sign/>}/>
                <Route path={'/sign-up'} element={<Sign/>}/>
            </Routes>
            {
                showFooter && <Footer/>
            }
        </div>
    )
}