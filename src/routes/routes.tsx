import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/lauout/MainLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AboutPage from "../pages/about/About";
import AllProductsPage from "../pages/allProducts/AllProducts";



export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
    },
    {
      path: "/about",
      element: <AboutPage/>,
    },
    {
      path: "/products",
      element: <AllProductsPage/>,
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