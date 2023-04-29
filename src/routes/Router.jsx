import { Navigate, createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import NewsCategory from "../components/NewsCategory/NewsCategory";
import NewsDetails from "../components/NewsLayout/NewsDetails";
import NewsLayout from "../components/NewsLayout/NewsLayout";
import About from "../components/About/About";
import ErrorPage from "../components/error/ErrorPage";
import Career from "../components/Career/Career";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Navigate to='/category/0' />,
            },
            {
                path: '/category/:id',
                element: <NewsCategory />,
            },


        ]

    },
    {
        path: 'news',
        element: <PrivateRoute>
                    <NewsLayout />
                </PrivateRoute>,
        children: [
            {
                path: ':newsId',
                element: <NewsDetails />,
                loader: ({ params }) => fetch(`https://backend-one-beta.vercel.app/news/${params.newsId}`)
            }
        ]
    },
    {
        path: 'login',
        element: <Login />
    },
    {
        path: 'register',
        element: <Register />
    },
    {
        path: 'about',
        element: <About />
    },
    {
        path: 'career',
        element: <Career />
    }
])

export default router;