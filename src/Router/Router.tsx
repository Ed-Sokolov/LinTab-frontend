import {Route, Routes} from "react-router-dom";
import {Main} from "../Pages/Main/Main";

export const Routing = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Main/>}/>
            <Route path={'/posts'} element={<Main/>}/>
        </Routes>
    )
}