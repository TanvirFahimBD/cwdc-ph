import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useState } from "react";
import app from "../firebase/firebase.init";

export const USER_CONTEXT = createContext();

const UserContext = ({ children }) => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const githubSignIn = () => {
    return signInWithPopup(auth, githubProvider);
  };

  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateAccountProfile = (displayName, photoURL) => {
    return updateProfile(auth.currentUser, {
      displayName,
      photoURL,
    });
  };

  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser).then(() => {
      setSuccess("Verification email sent");
    });
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };

  const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user);
    } else {
    }
  });

  console.log("user from context", user);

  const value = {
    user,
    setUser,
    login,
    signUp,
    updateAccountProfile,
    googleSignIn,
    githubSignIn,
    verifyEmail,
    error,
    setError,
    success,
    setSuccess,
    logOut,
  };

  return (
    <USER_CONTEXT.Provider value={value}>{children}</USER_CONTEXT.Provider>
  );
};

// TODO:usecontext & export

export default UserContext;
