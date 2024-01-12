// const router = require("express").Router();

// const db = require("../index.js");

// module.exports = (db) => {
//   router.get("/", (req, res) => {
//     let locations = [];

//     db.collection("locations")
//       .find()
//       .sort({ rank: 1 })
//       .forEach((location) => locations.push(location))
//       .then(() => {
//         res.status(200).json(locations);
//       })
//       .catch(() => {
//         res.status(500).json({ error: "Could not fetch documents" });
//       });
//   });

//   return router;
// };

import express from "express";
import db from "../db/conn.js";
import { ObjectId } from "mongodb";

const router = express.Router();

router.get("/", async (req, res) => {
  let collection = await db.collection("locations");
  let results = await collection.find({}).limit(50).toArray();
  res.send(results).status(200);
});

export default router;