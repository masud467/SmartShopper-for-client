import Root from "../layouts/Root";
 
import {
    createBrowserRouter
  } from "react-router-dom";
import SignUp from "../pages/signUp/SignUp";
import LogIn from "../pages/login/LogIn";
import Home from "../pages/home/Home";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/signup',
          element:<SignUp></SignUp>
        },
        {
          path:'/login',
          element:<LogIn></LogIn>
        }
      ]
    },
  ]);

