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
import UserDashboardOverview from "../components/dashboard/UserOverView";
import UserProfile from "../components/dashboard/UserProfile";



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
        children: [
          { index: true, path: "overview", element: <PrivateRouts><UserDashboardOverview /></PrivateRouts> },
          { path: "profile", element: <PrivateRouts><UserProfile /></PrivateRouts> },
          { path: "orders", element: <PrivateRouts><SingleUserOrder /></PrivateRouts> },
          { path: "update-password", element: <PrivateRouts><UpdatePassword /></PrivateRouts> },
        ],
      },

      {
          path: "admin",
          children: [
          { path: "manage-users", element: <PrivateRouts><ManageUser /></PrivateRouts> },
          { path: "manage-products", element: <PrivateRouts><AllProductsPage /></PrivateRouts> },
          { path: "manage-orders", element: <PrivateRouts><ManageOrder /></PrivateRouts> },
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