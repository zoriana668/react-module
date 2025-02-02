import {Outlet} from "react-router-dom";
import {Menu} from "../components/menu/Menu";

export const MainLayout = () => {
    return (
        <div>
            <Menu/>
            <hr/>
            <Outlet/>
        </div>
    );
};
