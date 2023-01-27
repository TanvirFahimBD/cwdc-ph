import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../../contexts/AuthProvider";

const Register = () => {
  const { userRegister, profileUpdate, error, setError, verifyEmail } =
    useUser();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profileImg, setProfileImg] = useState("");
  const [acceptTerm, setAcceptTerm] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    userRegister(email, password)
      .then((userCredential) => {
        updateProfile(name, profileImg);
        sendVerifyEmail();
        setError("");
        toast.success("Registration successful");
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
        setError(errorMessage);
      });
  };

  const updateProfile = (displayName, photoURL) => {
    profileUpdate(displayName, photoURL)
      .then(() => {})
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };

  const sendVerifyEmail = () => {
    verifyEmail().then(() => {});
  };

  return (
    <div>
      <h1>Register</h1>
      <div className="my-5">
        <form onSubmit={handleRegister}>
          <label className="d-block" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter name"
            className="p-2 m-2  w-50"
            required
            onBlur={(e) => {
              setName(e.target.value);
            }}
          />
          <label className="d-block" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            className="p-2 m-2  w-50"
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
          <label className="d-block" htmlFor="profileImg">
            Profile Img
          </label>
          <input
            type="text"
            name="profileImg"
            placeholder="Enter Profile Img"
            className="p-2 m-2  w-50"
            required
            onBlur={(e) => {
              setProfileImg(e.target.value);
            }}
          />
          <br />
          <div className="mt-3">
            <input
              type="checkbox"
              name="acceptTerm"
              required
              onChange={() => setAcceptTerm(!acceptTerm)}
            />
            <span className="mx-4" name="acceptTerm">
              Accept terms & conditions
            </span>
          </div>
          <br />
          <input
            type="submit"
            value="Register"
            className="btn btn-primary my-3 w-50"
            disabled={!acceptTerm}
          />
        </form>
      </div>
      {error && <p className="text-danger">{error}</p>}
      <p>
        Already have account?{" "}
        <Link to="/login" className="text-decoration-none">
          Login
        </Link>{" "}
        now
      </p>
    </div>
  );
};

export default Register;
