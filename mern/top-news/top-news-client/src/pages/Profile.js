import React, { useRef, useState } from "react";
import { toast } from "react-hot-toast";
import { useUser } from "../contexts/AuthProvider";

const Profile = () => {
  const { user, profileUpdate } = useUser();
  const [name, setName] = useState(user.displayName);
  const [photoURL, setPhotoURL] = useState(user.photoURL);

  const handleProfileUpdate = (e) => {
    e.preventDefault();
    profileUpdate(name, photoURL)
      .then(() => {
        toast.success("Profile updated successfully");
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };

  return (
    <div className="border shadow-lg p-5 m-4">
      <h1>Profile</h1>
      <img
        src={user.photoURL}
        alt=""
        width={200}
        height={200}
        className="rounded-pill"
      />
      <br />
      <div>
        <form onSubmit={handleProfileUpdate}>
          <label className="d-block my-2" htmlFor="email">
            Email
          </label>
          <input
            className="my-1 p-2"
            name="email"
            defaultValue={user.email}
            disabled
          />
          <br />
          <label className="d-block my-2" htmlFor="name">
            Name
          </label>
          <input
            className="my-1 p-2"
            name="name"
            defaultValue={user.displayName}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <br />
          <label className="d-block my-2" htmlFor="profileImage">
            Profile Image
          </label>
          <input
            className="my-1 p-2"
            name="profileImage"
            defaultValue={user.photoURL}
            onChange={(e) => {
              setPhotoURL(e.target.value);
            }}
          />
          <br />
          <input
            type="submit"
            value="Update Profile"
            className="mt-4 btn btn-primary w-25"
          />
        </form>
      </div>
    </div>
  );
};

export default Profile;
