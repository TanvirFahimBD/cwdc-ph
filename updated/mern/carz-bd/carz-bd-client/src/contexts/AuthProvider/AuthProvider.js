import React, { createContext, useState } from "react";
import app from "../../firebase/firebase.config";
import { getAuth } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "fahim" });
  const [loading, setLoading] = useState(false);
  const value = { user, loading };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
