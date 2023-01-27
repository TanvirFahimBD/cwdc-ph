import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { useUser } from "../../contexts/AuthProvider";

const ForgetPassword = () => {
  const { resetPassword, error, setError } = useUser();
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/login";

  const handleForgetPassword = (e) => {
    e.preventDefault();
    resetPassword(email)
      .then(() => {
        setError("");
        toast.success("Reset Password send successfully");
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
      <h1>Reset Password</h1>
      <div className="my-5">
        <form onSubmit={handleForgetPassword}>
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
          <br />
          <input
            type="submit"
            value="Reset Password"
            className="btn btn-primary my-3 w-50"
          />
        </form>
      </div>
      {error && <p className="text-danger">{error}</p>}
    </div>
  );
};

export default ForgetPassword;
