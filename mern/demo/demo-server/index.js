const express = require("express");
const cors = require("cors");
const e = require("express");

const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to Demo server");
});

const users = [
  { id: 1, name: "Tanvir1", email: "tanvir1@gmail.com" },
  { id: 2, name: "Tanvir2", email: "tanvir2@gmail.com" },
  { id: 3, name: "Tanvir3", email: "tanvir3@gmail.com" },
];

app.get("/users", (req, res) => {
  if (req.query.name) {
    const search = req.query.name;
    const filtered = users.filter(
      (user) => user.name.toLowerCase().indexOf(search) >= 0
    );
    res.send(filtered);
  } else {
    res.send(users);
  }
});

app.post("/users", (req, res) => {
  const user = req.body;
  user.id = users.length + 1;
  users.push(user);
  res.send(user);
});

app.listen(port, () => {
  console.log(`Listening form port ${port}`);
});
