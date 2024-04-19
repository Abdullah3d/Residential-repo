import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home";
import ErrorPage from "../layout/ErrorPage";
import Contact from "../pages/Contact";
import Login from "../layout/Login";
import Register from "../layout/Register";
import ViewProperty from "../pages/ViewProperty";
import PrivetRoute from "./PrivetRoute";
import Profile from "../pages/Profile";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path:'/contact',
                element:<PrivetRoute><Contact></Contact></PrivetRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path:'/view/:id',
                element:<PrivetRoute><ViewProperty></ViewProperty></PrivetRoute>,
                loader: () => fetch ('estates.json')
            },
            {
                path:'/updateProfile',
                element:<Profile></Profile>
            }
        ]
    }
]);
export default router;