import { createBrowserRouter, Navigate } from "react-router-dom";
import RootLayout from "./layouts/RootLayout/RootLayout";
import LoginPage from "./pages/Login/LoginPage";
import RegisterPage from "./pages/Register/RegisterPage";
import Tables from "./pages/Tables";

const routes = [
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to="/dashboard" replace />,
      },
      {
        path: "/orders",
      },
      {
        path: "/orders-history",
      },
      {
        path: "/menus",
      },
      {
        path: "/tables",
        element: <Tables />,
      },
      {
        path: "/bills",
      },
      {
        path: "/settings",
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
