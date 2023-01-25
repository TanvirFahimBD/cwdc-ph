import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { USER_CONTEXT } from "../../contexts/UserContext";

const Header = () => {
  const { user, setUser, setError, logOut, setSuccess } =
    useContext(USER_CONTEXT);

  const handleLogout = () => {
    logOut()
      .then(() => {
        setUser({});
        setSuccess("");
        setError("");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
        setSuccess("");
      });
  };

  return (
    <div className="my-3">
      <Link to="/" className="mx-3 text-decoration-none">
        Home
      </Link>
      <Link to="/products" className="mx-3 text-decoration-none">
        Products
      </Link>
      {!user.uid && (
        <Link to="/login" className="mx-3 text-decoration-none">
          Login
        </Link>
      )}
      {user.uid && (
        <>
          <Link to="/profile" className="mx-3 text-decoration-none">
            Profile
          </Link>
          <span>{user.displayName}</span>
          <Link to="/" className="mx-3 text-decoration-none">
            <button onClick={handleLogout} className="btn btn-dark">
              Logout
            </button>
          </Link>
        </>
      )}
    </div>
  );
};

export default Header;
