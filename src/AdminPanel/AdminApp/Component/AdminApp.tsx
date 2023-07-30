import {SidebarContainer} from "../../Widgets/Sidebar/SidebarContainer";
import {AdminRoutes} from "../../AdminRouter/AdminRoutes";
import "./adminApp.scss";

export const AdminApp = () => {
    return (
        <div className="admin_panel">
            <SidebarContainer/>
            <div className="admin_panel__content">
                <AdminRoutes/>
            </div>
        </div>
    )
}