import "./App.css";
import {RouterProvider } from 'react-router-dom'
import router from "./Router/Routes";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";

function App() {
  return (<div className="max-w-screen-xl mx-auto">
    <AuthProvider>
      <RouterProvider router={router}>
      </RouterProvider>
    </AuthProvider>
  </div>);
}

export default App;
