import { RouterProvider } from "react-router-dom";
import "./App.css";
import AuthProvider from "./contexts/AuthProvider";
import { router } from "./routes/Router/Router";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
        <Toaster />
      </AuthProvider>
    </div>
  );
}

export default App;
