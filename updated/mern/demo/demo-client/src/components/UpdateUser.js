import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Header from "./Header";

const UpdateUser = () => {
  const data = useLoaderData();
  const [user, setUser] = useState(data);
  const handleBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newUser = { ...user };
    newUser[field] = value;
    setUser(newUser);
  };

  const handleUpdateUser = (e) => {
    e.preventDefault();
    fetch(`http://localhost:5000/users/${user._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("User Updated successfully");
        }
      });
    e.target.reset();
  };
  return (
    <div>
      <Header />
      <div className="border rounded shadow-lg my-4 p-3 w-50  mx-auto text-center">
        <h4>Update Client</h4>
        <hr />
        <form onSubmit={handleUpdateUser}>
          <input
            type="text"
            placeholder="Enter name"
            name="name"
            className="d-block text-center mx-auto my-3"
            onBlur={handleBlur}
            defaultValue={user.name}
          />
          <input
            type="email"
            placeholder="Enter email"
            name="email"
            className="d-block text-center mx-auto my-3"
            onBlur={handleBlur}
            defaultValue={user.email}
          />
          <input
            type="submit"
            value="Update Client"
            className="text-center mx-auto my-1 btn btn-primary"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateUser;
