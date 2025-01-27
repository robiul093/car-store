import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/lauout/MainLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";



export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/register',
        element: <Register />
    },
  ]);