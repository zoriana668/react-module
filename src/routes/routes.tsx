import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "../layouts/MainLayout.tsx";
import {HomePage} from "../pages/HomePage.tsx";
import {AuthPage} from "../pages/AuthPage.tsx";


export const routes = createBrowserRouter([
    {
        path:'/', element: <MainLayout/>, children: [
            {index: true, element: <HomePage/>},
            {path: '/auth', element: <AuthPage/>}
        ]
    }

])