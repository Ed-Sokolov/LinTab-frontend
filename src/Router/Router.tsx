import {Route, Routes} from "react-router-dom";
import {HeaderContainer} from "../Widgets/Header/HeaderContainer";
import {Footer} from "../Widgets/Footer/Footer";
import {Main} from "../Pages/Main/Main";
import {Posts} from "../Pages/Posts/Posts";
import {Post} from "../Pages/Post/Post";
import {Sign} from "../Pages/Sign/Sign";

export const Routing = () => {
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
            <Footer/>
        </div>
    )
}