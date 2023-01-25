import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { USER_CONTEXT } from "../../contexts/UserContext";

const SocialLogin = () => {
  const {
    googleSignIn,
    setUser,
    error,
    setError,
    githubSignIn,
    success,
    setSuccess,
  } = useContext(USER_CONTEXT);
  const navigate = useNavigate();

  const handleGoogleSingIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        setError("");
        setSuccess("Successful login");
        setUser(user);
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
        setSuccess("");
      });
  };

  const handleGithubSingIn = () => {
    githubSignIn()
      .then((result) => {
        const user = result.user;
        setError("");
        setUser(user);
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  return (
    <div>
      <div className="mt-3">
        <button className="btn btn-primary mx-4" onClick={handleGoogleSingIn}>
          Google SignIn
        </button>
        <button className="btn btn-primary" onClick={handleGithubSingIn}>
          Github SignIn
        </button>
        {error && <p className="text-danger mt-4">{error}</p>}
        {success && <p className="text-success mt-4">{success}</p>}
      </div>
    </div>
  );
};

export default SocialLogin;
