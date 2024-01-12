// const express = require("express");
// const { connectToDb, getDb } = require("./db");

// // init app and middleware
// const app = express();

// // db connection
// let db;

// connectToDb((err) => {
//   if (!err) {
//     app.listen(3000, () => {
//       console.log("app listening on port 3000");
//     });

//     db = getDb();
//   }
// });

// // routes

// app.get("/locations", (req, res) => {
//   let locations = [];

//   db.collection("locations")
//     .find()
//     .sort({ rank: 1 })
//     .forEach((location) => locations.push(location))
//     .then(() => {
//       res.status(200).json(locations);
//     })
//     .catch(() => {
//       res.status(500).json({ error: "Could not fetch documents" });
//     });
// });

import express from "express";
import cors from "cors";
import "./loadEnvironment.js";
import locationsRouter from "./routes/locations.js";

const PORT = 3000;
const app = express();

app.use(cors());
app.use(express.json());

// Load the /posts routes
app.use("/api/locations", locationsRouter);

// Global error handling
app.use((err, _req, res, next) => {
  res.status(500).send("Uh oh! An unexpected error occured.");
});

// start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
