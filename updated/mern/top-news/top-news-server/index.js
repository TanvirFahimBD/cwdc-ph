const express = require("express");
const cors = require("cors");
const newsCategories = require("./data/newsCategories.json");
const news = require("./data/news.json");
const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from top news server");
});

app.get("/news-categories", (req, res) => {
  res.send(newsCategories);
});

app.get("/news", (req, res) => {
  res.send(news);
});

app.get("/news/:id", (req, res) => {
  const id = req.params.id;
  const selectedNews = news.find((n) => n._id === id);
  res.send(selectedNews);
});

app.get("/categories/:id", (req, res) => {
  const id = req.params.id;
  let selectedCategory;
  if (id === "08") {
    res.send(news);
  } else {
    selectedCategory = news.filter((n) => n.category_id === id);
    res.send(selectedCategory);
  }
});

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
