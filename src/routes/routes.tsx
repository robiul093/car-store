import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/lauout/MainLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AboutPage from "../pages/about/About";
import AllProductsPage from "../pages/allProducts/AllProducts";
import ProductDetails from "../components/ProductDetails";
import DashboardLayout from "../components/lauout/DashboardLayout";
import PrivateRouts from "./PrivateRouts";
import UpdatePassword from "../components/dashboard/UpdatePassword";
import SingleUserOrder from "../components/dashboard/SingleUserOrder";
import ManageUser from "../components/dashboard/admin/ManageUser";
import ManageOrder from "../components/dashboard/admin/ManageOrder";
import VerifyOrder from "../pages/VerifyOrder";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/products",
    element: <AllProductsPage />,
  },
  {
    path: "/product/:id",
    element: <ProductDetails />,
  },
  {
    path: "/order/verify",
    element: <VerifyOrder />
  },
  {
    path: "/dashboard",
    element: <PrivateRouts> <DashboardLayout /></PrivateRouts>,
    children: [
      {
        path: "user",
        // element: <DashboardLayout />,
        children: [
          { index: true, path: "profile", element: <ProductDetails /> },
          { path: "orders", element: <SingleUserOrder /> },
          { path: "update-password", element: <UpdatePassword /> },
        ],
      },

      {
        path: "admin",
        // element: <AdminDashboard />,
        children: [
          { path: "manage-users", element: <ManageUser /> },
          { path: "manage-products", element: <AllProductsPage /> },
          { path: "manage-orders", element: <ManageOrder /> },
        ],
      },
    ]
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