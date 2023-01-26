import React, { createContext, useContext, useEffect } from "react";
import { useState } from "react";

export const PRODUCT_CONTEXT = createContext();

const ProductProvider = ({ children }) => {
  const [state, setState] = useState([]);
  useEffect(() => {
    fetch("https://fake-api.up.railway.app/pcProducts")
      .then((res) => res.json())
      .then((data) => {
        setState(data);
      });
  }, []);

  const value = { state, setState };

  return (
    <PRODUCT_CONTEXT.Provider value={value}>
      {children}
    </PRODUCT_CONTEXT.Provider>
  );
};

export const useProducts = () => {
  return useContext(PRODUCT_CONTEXT);
};

export default ProductProvider;
