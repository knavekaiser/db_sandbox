const express = require("express");
const app = express();
const DB = require("nedb");

const Port = process.env.Port || 5000;

const database = new DB("database.db");
database.loadDatabase();

app.listen(Port, () => console.log("server just ran"));
app.use(express.static("public"));
app.use(express.json());

app.post("/api", (req, res) => {
  console.log(req.body);
  database.insert({ name: req.body.name });
  database.find({ name: }, (err, data) => {
    res.json(data);
  });
});
