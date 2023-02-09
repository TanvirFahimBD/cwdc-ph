import React, { useState } from "react";
import { Link } from "react-router-dom";

const Users = ({ allUsers }) => {
  const [users, setUser] = useState(allUsers);

  const handleDelete = (selectedUser) => {
    const res = window.confirm(
      `Are you sure you want to delete ${selectedUser.name}?`
    );
    if (res) {
      fetch(`http://localhost:5000/users/${selectedUser._id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert(`${selectedUser.name} deleted successfully`);
            const remainingUsers = users.filter(
              (user) => user._id !== selectedUser._id
            );
            setUser(remainingUsers);
          }
        });
    }
  };

  return (
    <div className="border rounded shadow-lg my-4 p-3 w-50  mx-auto">
      <h4>Total Clients: {users.length}</h4>
      <hr />
      {users.map((user, i) => (
        <p key={i}>
          <Link to={`users/update/${user._id}`} className="btn btn-success">
            Update
          </Link>
          <span className="text-secondary">--{i + 1} -- </span>
          <span className="text-danger">{user.name} -- </span>
          <span className="text-success">{user.email} -- </span>
          <button
            className="btn btn-primary"
            onClick={() => handleDelete(user)}
          >
            Delete
          </button>
        </p>
      ))}
    </div>
  );
};

export default Users;
