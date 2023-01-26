import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Category from "../../pages/Category/Category";
import Home from "../../pages/Home";
import News from "../../pages/News/News";
import NotFoundPage from "../../pages/Shared/NotFoundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "category/:id",
        element: <Category />,
      },
      {
        path: "/news/:id",
        element: <News />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);
