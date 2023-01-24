import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { USER_CONTEXT } from "../../context/UserContext";
import SocialLogin from "./SocialLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, setUser, setError } = useContext(USER_CONTEXT);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    login(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        console.log("login success", user);
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  return (
    <div style={{ minHeight: "100vh" }}>
      <div className="border rounded shadow-lg m-5 p-4">
        <h1 className="my-3">Login</h1>
        <form onSubmit={handleLogin}>
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
          <input type="submit" value="Login" className="btn btn-primary my-2" />
        </form>
      </div>
      <SocialLogin />
      <hr />
      <p>
        Don't have any Account? <Link to="/signup">Signup</Link> now
      </p>
    </div>
  );
};

export default Login;
