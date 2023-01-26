import { RouterProvider } from "react-router-dom";
import "./App.css";
import ProductProvider from "./contexts/ProductProvider";
import { router } from "./routes/Router/Router";

function App() {
  return (
    <div className="App">
      <ProductProvider>
        <RouterProvider router={router}></RouterProvider>
      </ProductProvider>
    </div>
  );
}

export default App;
