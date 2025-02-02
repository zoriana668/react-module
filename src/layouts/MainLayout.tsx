import {Outlet} from "react-router-dom";
import {Menu} from "../../src__/components/menu/Menu.tsx";

export const MainLayout = () => {
    return (
        <div>
            <Menu/>
            <hr/>
            <Outlet/>
        </div>
    );
};
