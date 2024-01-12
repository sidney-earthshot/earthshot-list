const express = require("express");
const { connectToDb, getDb } = require("./db");

// init app and middleware
const app = express();

// db connection
let db;

connectToDb((err) => {
  if (!err) {
    app.listen(3000, () => {
      console.log("app listening on port 3000");
    });

    db = getDb();
  }
});

// routes

app.get("/locations", (req, res) => {
  let locations = [];

  db.collection("users")
    .find()
    .sort({ rank: 1 })
    .forEach((location) => locations.push(location))
    .then(() => {
      res.status(200).json(locations);
    })
    .catch(() => {
      res.status(500).json({ error: "Could not fetch documents" });
    });

});
