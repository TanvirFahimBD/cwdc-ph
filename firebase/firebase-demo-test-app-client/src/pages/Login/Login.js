import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { USER_CONTEXT } from "../../contexts/UserContext";
import SocialLogin from "./SocialLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, setUser, setError, setSuccess } = useContext(USER_CONTEXT);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    login(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        setSuccess("login successful");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
        setSuccess("");
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
            required
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
            required
          />
          <p>
            <Link to="/forget-password" className="text-decoration-none">
              Forget Password?
            </Link>
          </p>
          <br />
          <input type="submit" value="Login" className="btn btn-primary my-2" />
        </form>
      </div>
      <SocialLogin />
      <hr />
      <p>
        Don't have any Account?{" "}
        <Link to="/signup" className="text-decoration-none">
          Signup
        </Link>{" "}
        now
      </p>
    </div>
  );
};

export default Login;
