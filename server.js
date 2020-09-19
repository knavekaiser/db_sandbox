const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const DB = require("nedb");

const URI = process.env.ATLAS_URI;
const connectDB = async () => {
  await mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("connected to DB");
};

connectDB();
app.get("/mongo", (req, res) => {
  const users = {
    id: 34256234234,
    firstName: "john",
    lastName: "trevolta",
  };
  res.send(JSON.stringify(users));
});

const PORT = process.env.PORT || 8000;

const database = new DB("database.db");
database.loadDatabase();

app.listen(PORT, () => console.log("server just ran"));
app.use(express.static("public"));
app.use(express.json());

app.post("/nedb", (req, res) => {
  console.log(req.body);
  database.insert({ name: req.body.name });
  database.find({}, (err, data) => {
    res.json(data);
  });
});
