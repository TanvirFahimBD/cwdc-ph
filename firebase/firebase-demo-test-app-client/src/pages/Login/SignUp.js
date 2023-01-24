import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { USER_CONTEXT } from "../../context/UserContext";
import SocialLogin from "./SocialLogin";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signUp, setUser, setError } = useContext(USER_CONTEXT);
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    signUp(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        console.log("signUp success", user);
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  console.log("password now", password);

  return (
    <div style={{ minHeight: "100vh" }}>
      <div className="border rounded shadow-lg m-5 p-4">
        <h1 className="my-3">SignUp</h1>
        <form onSubmit={handleSignUp}>
          <label className="d-block">Name</label>
          <input
            className="my-2 p-2 rounded "
            onBlur={(e) => {
              setName(e.target.value);
            }}
            type="text"
            name="name"
            placeholder="Enter Name"
          />
          <label className="d-block">Email</label>
          <input
            className="my-2 p-2 rounded "
            onBlur={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            name="email"
            placeholder="Enter email"
          />
          <label className="d-block">Password</label>
          <input
            className="my-2 p-2 rounded "
            onBlur={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            name="password"
            placeholder="Enter Password"
          />
          <br />
          <input
            type="submit"
            value="Sign Up"
            className="btn btn-primary my-2"
          />
        </form>
      </div>
      <SocialLogin />
      <hr />
      <p>
        Have Account? <Link to="/login">Login</Link> now
      </p>
    </div>
  );
};

export default SignUp;
