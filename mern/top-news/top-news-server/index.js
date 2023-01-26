const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

const newsCategories = require("./data/newsCategories.json");

app.get("/", (req, res) => {
  res.send("Hello from top news server");
});

app.get("/news-categories", (req, res) => {
  res.send(newsCategories);
});

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
