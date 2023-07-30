import React from "react";
import {Route, Routes} from "react-router-dom";
import {Main} from "../Pages/Main/Main";

export const AdminRoutes = () => {
    return (
        <Routes>
            <Route path={'/admin/main'} element={<Main/>}/>
        </Routes>
    )
}
