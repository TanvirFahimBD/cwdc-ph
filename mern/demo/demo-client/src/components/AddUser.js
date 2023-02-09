import React, { useState } from "react";
import Header from "./Header";

const AddUser = () => {
  const [user, setUser] = useState({});
  const handleBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newUser = { ...user };
    newUser[field] = value;
    setUser(newUser);
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("User added successfully");
        }
      });
    e.target.reset();
  };

  return (
    <>
      <Header />
      <div className="border rounded shadow-lg my-4 p-3 w-50  mx-auto text-center">
        <h4>Add New Clients</h4>
        <hr />
        <form onSubmit={handleAddUser}>
          <input
            type="text"
            placeholder="Enter name"
            name="name"
            className="d-block text-center mx-auto my-3"
            onBlur={handleBlur}
          />
          <input
            type="email"
            placeholder="Enter email"
            name="email"
            className="d-block text-center mx-auto my-3"
            onBlur={handleBlur}
          />
          <input
            type="submit"
            value="Add New Client"
            className="text-center mx-auto my-1 btn btn-primary"
          />
        </form>
      </div>
    </>
  );
};

export default AddUser;
