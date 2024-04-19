import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home";
import ErrorPage from "../layout/ErrorPage";
import Contact from "../pages/Contact";
import Login from "../layout/Login";
import Register from "../layout/Register";
import ViewProperty from "../pages/ViewProperty";

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
                element:<Contact></Contact>
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
                element:<ViewProperty></ViewProperty>,
                loader: () => fetch ('estates.json')
            }
        ]
    }
]);
export default router;