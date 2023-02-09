const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.hqjnl.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function run() {
  try {
    const usersCollection = client.db("demoDb").collection("users");

    //GET USER
    app.get("/users", async (req, res) => {
      const users = await usersCollection.find({}).toArray();
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

    //POST USER
    app.post("/users", async (req, res) => {
      const user = req.body;
      const result = await usersCollection.insertOne(user);
      res.send(result);
    });
  } finally {
    // client.close();
  }
}
run().catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Welcome to Demo server");
});

app.listen(port, () => {
  console.log(`Listening form port ${port}`);
});
