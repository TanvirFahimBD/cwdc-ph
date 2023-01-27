import React, { createContext, useContext, useEffect, useState } from "react";
import app from "../firebase/firebase.init";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";

export const PRODUCT_CONTEXT = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const ProductProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  console.log("user", user);

  const googleSignIn = () => {
    setLoading(true);
    signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    // setLoading(true);
    signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setLoading(false);
      } else {
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const value = { user, setUser, loading, googleSignIn, logOut };

  return (
    <PRODUCT_CONTEXT.Provider value={value}>
      {children}
    </PRODUCT_CONTEXT.Provider>
  );
};

export const useUser = () => {
  return useContext(PRODUCT_CONTEXT);
};

export default ProductProvider;
