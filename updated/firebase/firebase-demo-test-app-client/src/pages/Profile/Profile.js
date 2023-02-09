import React, { useContext } from "react";
import { USER_CONTEXT } from "../../contexts/UserContext";

const Profile = () => {
  const { user } = useContext(USER_CONTEXT);

  return (
    <div style={{ minHeight: "100vh" }}>
      <div className="border rounded shadow-lg m-5 p-4">
        <img
          src={
            user.photoURL
              ? user.photoURL
              : "https://cdn-icons-png.flaticon.com/128/3135/3135715.png"
          }
          className="rounded-pill"
          alt="profile_picture"
          width={150}
        />
        <h5 className="my-4">Email: {user.email}</h5>
        <h3>Name: {user.displayName}</h3>
      </div>
    </div>
  );
};

export default Profile;
