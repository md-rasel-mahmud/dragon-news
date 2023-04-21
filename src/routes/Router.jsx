import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Main from "../components/Main/Main";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>,
        children: [
            {
                path: '/',
                element: <Main/>,
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