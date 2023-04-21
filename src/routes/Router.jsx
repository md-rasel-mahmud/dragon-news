import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Main from "../components/Main/Main";
import Category from "../components/Category/Category";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>,
        children: [
            {
                path: '/',
                element: <Main/>,
            },
            {
                path: '/category/:id',
                element: <Category/>,
            },
            
        ]
        
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/register',
        element: <Register/>
    },
])

export default router;