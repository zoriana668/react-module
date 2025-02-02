import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "../layouts/MainLayout";
import {Home} from "../pages/Home";
import {Auth} from "../pages/Auth";
import {Users} from "../pages/Users";
import {UserDetail} from "../pages/UserDetail";
import {Recipes} from "../pages/Recipes";
import {RecipeDetail} from "../pages/RecipeDetail";


export const routes = createBrowserRouter([
    {
        path:'/', element: <MainLayout/>,

        children: [
            {index: true, element: <Home/>},

            {path: '/auth', element: <Auth/>},
            {path: '/users', element: <Users/>},
            {path: '/users/:id', element: <UserDetail/>},
            {path: '/recipes', element: <Recipes/>},
            {path: '/recipes/:id', element: <RecipeDetail/>}
        ]
    }
])