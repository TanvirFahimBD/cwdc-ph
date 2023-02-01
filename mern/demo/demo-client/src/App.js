import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const handleAddUser = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const newUser = { name, email };
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.id) {
          alert("User added successfully");
          const newUsers = [...users, data];
          setUsers(newUsers);
        }
      });
    e.target.reset();
  };

  return (
    <div className="App">
      <div className="border rounded shadow-lg my-4 p-3 w-50  mx-auto">
        <h4>Add New Clients</h4>
        <hr />
        <form onSubmit={handleAddUser}>
          <input
            type="text"
            placeholder="Enter name"
            name="name"
            className="d-block text-center mx-auto my-3"
          />
          <input
            type="email"
            placeholder="Enter email"
            name="email"
            className="d-block text-center mx-auto my-3"
          />
          <input
            type="submit"
            value="Add New Client"
            className="text-center mx-auto my-1 btn btn-primary"
          />
        </form>
      </div>
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
    </div>
  );
}

export default App;
