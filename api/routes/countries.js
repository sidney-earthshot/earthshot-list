import express from "express";
import db from "../db/conn.js";
import { ObjectId } from "mongodb";
import axios from "axios";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    let collection = await db.collection("countries");
    let results = await collection
      .find(
        {},
        {
          projection: {
            Country: 1,
            "Country code": 1,
            "Image URL": 1,
            "Image author": 1,
            "Income classification": 1,
            Region: 1,
            LDC: 1,
          },
        }
      )
      .limit(30)
      .toArray();

    // Use Promise.all to wait for all promises to resolve
    const updatedResults = await Promise.all(
      results.map(async (location) => {
        try {
          return {
            ...location,
          };
        } catch (error) {
          console.error("Error:", error);
          return location; // Return the original location if the API call fails
        }
      })
    );

    res.send(updatedResults).status(200); // Send the updated results
  } catch (error) {
    console.error("Error fetching countries:", error);
    res.status(500).send({ error: "Internal server error" });
  }
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
