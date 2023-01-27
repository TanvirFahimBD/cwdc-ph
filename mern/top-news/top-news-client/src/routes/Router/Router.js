import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Category from "../../pages/Category/Category";
import Home from "../../pages/Home";
import ForgetPassword from "../../pages/Login/ForgetPassword";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Login/Register";
import NewsCardDetails from "../../pages/Shared/NewsCardDetails";
import NotFoundPage from "../../pages/Shared/NotFoundPage";
import PrivateRoute from "../PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:5000/news"),
      },
      {
        path: "categories/:id",
        element: (
          <PrivateRoute>
            <Category />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/categories/${params.id}`),
      },
      {
        path: "/news/:id",
        element: (
          <PrivateRoute>
            <NewsCardDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/news/${params.id}`),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/forget-password",
        element: <ForgetPassword />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);
