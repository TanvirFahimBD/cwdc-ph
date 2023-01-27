import React from "react";
import { Button } from "react-bootstrap";
import { FaFacebookF } from "react-icons/fa";
import {
  BsGoogle,
  BsTwitter,
  BsYoutube,
  BsTwitch,
  BsGithub,
} from "react-icons/bs";
import Advertise from "./Advertise";
import { useUser } from "../../contexts/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const RightSideNav = () => {
  const { googleSignIn, githubSignIn, user, setError } = useUser();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        setError("");
        toast.success("Google Login successful");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
        setError(errorMessage);
      });
  };

  const handleGithubSignIn = () => {
    githubSignIn()
      .then((result) => {
        setError("");
        toast.success("Github Login successful");
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
      {!user.uid && (
        <div>
          <Button className="d-block my-3" onClick={handleGoogleSignIn}>
            <BsGoogle className="me-3" />
            Login with Google
          </Button>
          <Button className="d-block my-3" onClick={handleGithubSignIn}>
            <BsGithub className="me-3" />
            Login with Github
          </Button>
        </div>
      )}

      <div className="my-5">
        <Advertise />
      </div>
      <div>
        <h5 className="text-start">Find us on</h5>
        <div className="text-start">
          <span className="d-block my-3">
            <FaFacebookF className="me-3" />
            Facebook
          </span>
          <span className="d-block my-3">
            <BsTwitter className="me-3" />
            Twitter
          </span>
          <span className="d-block my-3">
            <BsYoutube className="me-3" />
            Youtube
          </span>
          <span className="d-block my-3">
            <BsTwitch className="me-3" />
            Twitch
          </span>
        </div>
      </div>
    </div>
  );
};

export default RightSideNav;
