import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useUser } from "../../contexts/AuthProvider";
import useTitle from "../../hooks/useTitle";

const Login = () => {
  useTitle("Login");
  const { userSignIn, error, setError } = useUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    userSignIn(email, password)
      .then((userCredential) => {
        setError("");
        toast.success("Login successful");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
        setError(errorMessage);
      });
  };

  return (
    <div>
      <h1>Login</h1>
      <div className="my-5">
        <form onSubmit={handleLogin}>
          <label className="d-block" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            className="p-2 m-2 w-50"
            required
            onBlur={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label className="d-block" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            className="p-2 m-2  w-50"
            required
            onBlur={(e) => {
              setPassword(e.target.value);
            }}
          />
          <br />
          <Link
            to="/forget-password"
            className="text-start text-decoration-none"
          >
            Forget Password?
          </Link>
          <br />
          <input
            type="submit"
            value="Login"
            className="btn btn-primary my-3 w-50"
          />
        </form>
      </div>
      {error && <p className="text-danger">{error}</p>}
      <p>
        Don't have account?{" "}
        <Link to="/register" className="text-decoration-none">
          Register
        </Link>{" "}
        now
      </p>
    </div>
  );
};

export default Login;
