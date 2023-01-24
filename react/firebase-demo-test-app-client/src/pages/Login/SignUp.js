import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { USER_CONTEXT } from "../../context/UserContext";
import SocialLogin from "./SocialLogin";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signUp, setUser, setError } = useContext(USER_CONTEXT);

  const handleSignUp = () => {
    signUp(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  console.log("name now", name);

  return (
    <div>
      <div>
        <h1>SignUp</h1>
        <form onSubmit={handleSignUp}>
          <label className="d-block">Name</label>
          <input
            onBlur={(e) => {
              setName(e.target.value);
            }}
            type="text"
            name="name"
            placeholder="Enter Name"
          />
          <label className="d-block">Email</label>
          <input
            onBlur={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            name="email"
            placeholder="Enter email"
          />
          <label className="d-block">Password</label>
          <input
            onBlur={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            name="password"
            placeholder="Enter Password"
          />
        </form>
        <input type="submit" value="Sign Up" className="btn btn-primary my-2" />
      </div>
      <p>
        Have Account? <Link to="/login">Login</Link> now
      </p>
      <SocialLogin />
    </div>
  );
};

export default SignUp;
