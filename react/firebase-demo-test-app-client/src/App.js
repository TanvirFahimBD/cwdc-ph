import { RouterProvider } from "react-router-dom";
import "./App.css";
import { route } from "./routes/Route/Route";

function App() {
  return <RouterProvider route={route} />;
}

export default App;
