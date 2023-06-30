import {Route, Routes} from "react-router-dom";
import {Main} from "../Pages/Main/Main";
import {Posts} from "../Pages/Posts/Posts";
import {HeaderContainer} from "../Widgets/Header/HeaderContainer";
import {Footer} from "../Widgets/Footer/Footer";

export const Routing = () => {
    return (
        <div>
            <HeaderContainer/>
            <Routes>
                <Route path={'/'} element={<Main/>}/>
                <Route path={'/posts'} element={<Posts/>}/>
            </Routes>
            <Footer/>
        </div>
    )
}