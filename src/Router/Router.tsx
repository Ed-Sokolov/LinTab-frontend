import {Route, Routes} from "react-router-dom";
import {Main} from "../Pages/Main/Main";
import {Posts} from "../Pages/Posts/Posts";
import {Post} from "../Pages/Post/Post";
import {Sign} from "../Pages/Sign/Sign";
import {User} from "../Pages/User/User";
import {Settings} from "../Pages/Settings/Settings";
import {CreatePost} from "../Pages/CreatePost/CreatePost";

export const Routing = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Main/>}/>
            <Route path={'/posts'} element={<Posts/>}/>
            <Route path={'/posts/create'} element={<CreatePost/>}/>
            <Route path={'/posts/:id'} element={<Post/>}/>
            <Route path={'/users/:id'} element={<User/>}/>
            <Route path={'/sign-in'} element={<Sign/>}/>
            <Route path={'/sign-up'} element={<Sign/>}/>
            <Route path={'/settings/:item?'} element={<Settings/>}/>
        </Routes>
    )
}