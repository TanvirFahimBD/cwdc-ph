import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main";
import Home from "../../pages/Home/Home";
import ForgetPassword from "../../pages/Login/ForgetPassword";
import Login from "../../pages/Login/Login";
import SignUp from "../../pages/Login/SignUp";
import Products from "../../pages/Products/Products";
import Profile from "../../pages/Profile/Profile";
import PageNotFound from "../../pages/Shared/PageNotFound";
import PrivateRoute from "../PrivateRoute";

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
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/products",
        element: (
          <PrivateRoute>
            <Products />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/forget-password",
        element: <ForgetPassword />,
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
]);
