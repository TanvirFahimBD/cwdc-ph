import React from "react";
import { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="border rounded shadow-lg my-4 p-3 w-50  mx-auto">
      <h4>Total Clients: {users.length}</h4>
      <hr />
      {users.map((user, i) => (
        <p key={i}>
          <span>{i + 1} -- </span>
          <span>{user.name} -- </span>
          <span>{user.email}</span>
        </p>
      ))}
    </div>
  );
};

export default Users;
