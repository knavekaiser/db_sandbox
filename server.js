const express = require("express");
const app = express();
const DB = require("nedb");
const { Pool } = require("pg");
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
}).get("/db", async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query("SELECT * FROM test_table");
    const results = { results: result ? result.rows : null };
    res.render("pages/db", results);
    client.release();
  } catch (err) {
    console.log(err);
    res.send("Error " + err);
  }
});

const PORT = process.env.PORT || 8000;

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
