import {Route, Routes} from "react-router-dom";
import {Main} from "../Pages/Main/Main";
import {Posts} from "../Pages/Posts/Posts";
import {Post} from "../Pages/Post/Post";
import {Sign} from "../Pages/Sign/Sign";
import {User} from "../Pages/User/User";

export const Routing = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Main/>}/>
            <Route path={'/posts'} element={<Posts/>}/>
            <Route path={'/posts/:id'} element={<Post/>}/>
            <Route path={'/users/:id'} element={<User/>}/>
            <Route path={'/sign-in'} element={<Sign/>}/>
            <Route path={'/sign-up'} element={<Sign/>}/>
        </Routes>
    )
}