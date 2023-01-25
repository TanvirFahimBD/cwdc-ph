import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { USER_CONTEXT } from "../../contexts/UserContext";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const { passwordReset, setSuccess, setError } = useContext(USER_CONTEXT);

  const handleResetPassword = (e) => {
    e.preventDefault();
    passwordReset(email)
      .then(() => {
        setSuccess("Password reset Email sent successfully");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  return (
    <div style={{ minHeight: "100vh" }}>
      <div className="border rounded shadow-lg m-5 p-4">
        <h1 className="my-3">Forget Password</h1>
        <form onSubmit={handleResetPassword}>
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
          <br />
          <input
            type="submit"
            value="Reset Password"
            className="btn btn-primary my-2"
          />
        </form>
        <Link to="/login" className="text-decoration-none">
          Go to login
        </Link>
      </div>
    </div>
  );
};

export default ForgetPassword;
