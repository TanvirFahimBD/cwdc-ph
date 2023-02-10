import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [user, setUser] = useState({});
  const handleBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newUser = { ...user };
    newUser[field] = value;
    setUser(newUser);
  };
  const handleSignUp = (e) => {
    e.preventDefault();
    console.log(user);
  };
  return (
    <div>
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left w-1/2">
          <img src="https://i.ibb.co/XXvbnc6/Mobile-login-bro.png" alt="" />
        </div>
        <form
          className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
          onSubmit={handleSignUp}
        >
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                name="email"
                className="input input-bordered"
                onBlur={handleBlur}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                name="password"
                onBlur={handleBlur}
              />
              <label className="label">
                <Link
                  to="/forget-password"
                  className="label-text-alt link link-hover"
                >
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <input
                type="submit"
                className="btn btn-success text-white"
                value="Login"
              />
            </div>
          </div>
          <p className="text-center mb-4">
            New to CarzBd?{" "}
            <Link to="/sign-up" className="text-green-400">
              Sign Up{" "}
            </Link>
            now{" "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
