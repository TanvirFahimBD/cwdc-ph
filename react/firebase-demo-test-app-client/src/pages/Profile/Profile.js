import React, { useContext } from "react";
import { USER_CONTEXT } from "../../context/UserContext";

const Profile = () => {
  const { user } = useContext(USER_CONTEXT);
  return (
    <div style={{ minHeight: "100vh" }}>
      <div className="border rounded shadow-lg m-5 p-4">
        <img
          src={user.photoURL}
          className="rounded-pill"
          alt="profile_picture"
        />
        <h5 className="my-4">Email: {user.email}</h5>
        <h3>Name: {user.displayName}</h3>
      </div>
    </div>
  );
};

export default Profile;