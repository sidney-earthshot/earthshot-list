import express from "express";
import db from "../db/conn.js";
import { ObjectId } from "mongodb";

const router = express.Router();

router.get("/", async (req, res) => {
  let collection = await db.collection("countries");
  let results = await collection.find({}, {}).limit(30).toArray();
  res.send(results).status(200);
});

router.get("/:number", async (req, res) => {
  const { number } = req.params;

  let collection = await db.collection("countries");
  let results = await collection
    .find({}, {})
    .skip(parseInt(number))
    .limit(30)
    .toArray();
  res.send(results).status(200);
});

export default router;
