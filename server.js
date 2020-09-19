const express = require("express");
const app = express();
const DB = require("nedb");

const PORT = process.env.PORT || 5000;

const database = new DB("database.db");
database.loadDatabase();

app.listen(PORT, () => console.log("server just ran"));
app.use(express.static("public"));
app.use(express.json());

app.post("/api", (req, res) => {
  console.log(req.body);
  database.insert({ name: req.body.name });
  database.find({}, (err, data) => {
    res.json(data);
  });
});
