import express from "express";
import db from "../db/conn.js";
import { ObjectId } from "mongodb";
import axios from "axios";

const router = express.Router();

router.get("/:countryName", async (req, res) => {
  try {
    let collection = await db.collection("countries");
    let results = await collection
      .find(
        {
          Country: req.params.countryName,
        },
        {}
      )
      .toArray();

    // Use Promise.all to wait for all promises to resolve
    const updatedResults = await Promise.all(
      results.map(async (location) => {
        try {
          let urbanPopulationResponse = await axios.get(
            `https://api.worldbank.org/v2/country/${location["Country code"]}/indicator/SP.URB.TOTL?format=json&date=2021`
          );
          // Assume the API response structure is as expected and has the necessary data
          let urbanPopulation = urbanPopulationResponse.data[1][0].value;

          let ruralPopulationResponse = await axios.get(
            `https://api.worldbank.org/v2/country/${location["Country code"]}/indicator/SP.RUR.TOTL?format=json&date=2021`
          );
          // Assume the API response structure is as expected and has the necessary data
          let ruralPopulation = ruralPopulationResponse.data[1][0].value;

          let urbanElectricityResponse = await axios.get(
            `https://api.worldbank.org/v2/country/${location["Country code"]}/indicator/EG.ELC.ACCS.UR.ZS?format=json&date=2021`
          );
          // Assume the API response structure is as expected and has the necessary data
          let urbanElectricity = urbanElectricityResponse.data[1][0].value;

          return {
            ...location,
            ["Urban population"]: urbanPopulation,
            ["Rural population"]: ruralPopulation,
            ["Urban electricity access"]: urbanElectricity,
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

export default router;
