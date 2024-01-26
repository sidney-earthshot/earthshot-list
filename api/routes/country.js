import express from "express";
import db from "../db/conn.js";
import { ObjectId } from "mongodb";

const router = express.Router();

router.get("/:countryName", async (req, res) => {
  let collection = await db.collection("countries");
  let results = await collection
    .find(
      {
        Country: req.params.countryName,
      },
      {}
    )
    .toArray();
  res.send(results).status(200);
});

export default router;
