import "./App.css";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import AddUser from "./components/AddUser";
import UpdateUser from "./components/UpdateUser";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      loader: () => fetch("http://localhost:5000/users"),
    },
    {
      path: "/user/add",
      element: <AddUser />,
    },
    {
      path: "users/update/:userId",
      element: <UpdateUser />,
      loader: ({ params }) =>
        fetch(`http://localhost:5000/users/${params.userId}`),
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
