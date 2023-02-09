import "./App.css";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import AddUser from "./components/AddUser";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/user/add",
      element: <AddUser />,
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
