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