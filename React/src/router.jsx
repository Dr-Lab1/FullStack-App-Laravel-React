import {createBrowserRouter} from "react-router-dom";
import DefaultLayout from "./components/DefaultLayout";
import GuestLayout from "./components/GuestLayout";
import NotFound from "./NotFound";
import Dashboard from "./views/Dashboard";
import Login from "./views/login";
import Signup from "./views/Signup";
import Users from "./views/users";

const router = createBrowserRouter([

    {
        path : '/',
        element : <DefaultLayout/>,
        children : [
            {
                path : '/users',
                element : <Users/>
            },
            {
                path : '/dashboard',
                element : <Dashboard/>
            }
        ]
    },

    {
        path : '/', 
        element : <GuestLayout/>, 
        children : [
            {
                path : '/login',
                element : <Login/>
            },
        
            {
                path : '/signup',
                element : <Signup/>
            },
        ]
    },



    {
        path : '*',
        element : <NotFound/>
    }

])

export default router;