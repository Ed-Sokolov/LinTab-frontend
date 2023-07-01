import {Route, Routes} from "react-router-dom";
import {Main} from "../Pages/Main/Main";
import {Posts} from "../Pages/Posts/Posts";
import {HeaderContainer} from "../Widgets/Header/HeaderContainer";
import {Footer} from "../Widgets/Footer/Footer";
import {Post} from "../Pages/Post/Post";

export const Routing = () => {
    return (
        <div>
            <HeaderContainer/>
            <Routes>
                <Route path={'/'} element={<Main/>}/>
                <Route path={'/posts'} element={<Posts/>}/>
                <Route path={'/posts/:id'} element={<Post/>}/>
            </Routes>
            <Footer/>
        </div>
    )
}