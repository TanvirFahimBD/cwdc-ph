const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Carz bd Live server");
});

app.listen(port, (req, res) => {
  console.log(`Listening on ${port} port`);
});
