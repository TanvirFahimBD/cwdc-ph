import React from "react";
import { Link } from "react-router-dom";
import SocialLogin from "./SocialLogin";

const Login = () => {
  return (
    <div>
      <div>
        <h1>Login</h1>
      </div>
      <p>
        Don't have any Account? <Link to="/signup">Signup</Link> now
      </p>
      <SocialLogin />
    </div>
  );
};

export default Login;
