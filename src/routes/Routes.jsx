import Root from "../layouts/Root";
 
import {
    createBrowserRouter
  } from "react-router-dom";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
    },
  ]);

