import React, { createContext, useContext } from "react";

export const PRODUCT_CONTEXT = createContext();

const ProductProvider = ({ children }) => {
  const value = { hi: "hi" };

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
