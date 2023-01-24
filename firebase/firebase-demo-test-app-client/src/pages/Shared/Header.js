import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { USER_CONTEXT } from "../../context/UserContext";

const Header = () => {
  const { user, setUser, setError, logOut, setSuccess } =
    useContext(USER_CONTEXT);

  const handleLogout = () => {
    logOut()
      .then(() => {
        setUser({});
        setSuccess("");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  return (
    <div className="my-3">
      <Link to="/" className="mx-3">
        Home
      </Link>
      {!user.uid && (
        <Link to="/login" className="mx-3">
          Login
        </Link>
      )}
      {user.uid && (
        <>
          <Link to="/profile" className="mx-3">
            Profile
          </Link>
          <span>{user.displayName}</span>
          <Link to="/" className="mx-3">
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
