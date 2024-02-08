import express from "express";
import db from "../db/conn.js";
import { ObjectId } from "mongodb";

const router = express.Router();

router.get("/", async (req, res) => {
  let collection = await db.collection("countries");
  let results = await collection
    .find(
      {},
      {
        projection: {
          Country: 1,
          "Image URL": 1,
          "Image author": 1,
          "Region": 1
        },
      }
    )
    .limit(30)
    .toArray();
  res.send(results).status(200);
});

export default router;
