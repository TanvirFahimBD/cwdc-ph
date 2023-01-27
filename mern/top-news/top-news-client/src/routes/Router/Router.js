import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Category from "../../pages/Category/Category";
import Home from "../../pages/Home";
import NewsCardDetails from "../../pages/Shared/NewsCardDetails";
import NotFoundPage from "../../pages/Shared/NotFoundPage";

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
        element: <Category />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/categories/${params.id}`),
      },
      {
        path: "/news/:id",
        element: <NewsCardDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/news/${params.id}`),
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);
