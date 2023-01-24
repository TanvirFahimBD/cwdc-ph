import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
]);
