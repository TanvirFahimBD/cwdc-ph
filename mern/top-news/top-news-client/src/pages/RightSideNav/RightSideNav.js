import React from "react";
import { Button } from "react-bootstrap";
import { FaFacebookF } from "react-icons/fa";
import { BsGoogle, BsTwitter, BsYoutube, BsTwitch } from "react-icons/bs";
import Advertise from "./Advertise";
import { useUser } from "../../contexts/ProductProvider";

const RightSideNav = () => {
  const { googleSignIn, setUser, user } = useUser();

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        // setUser(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
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
          <Button className="d-block my-3">
            <FaFacebookF className="me-3" />
            Login with Facebook
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
