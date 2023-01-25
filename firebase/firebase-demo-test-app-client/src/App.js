import { RouterProvider } from "react-router-dom";
import "./App.css";
import UserContext from "./contexts/UserContext";
import { router } from "./routes/Route/Route";

function App() {
  return (
    <div className="App">
      <UserContext>
        <RouterProvider router={router}></RouterProvider>
      </UserContext>
    </div>
  );
}

export default App;
