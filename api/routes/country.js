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

          let urbanPopulation = urbanPopulationResponse.data[1][0].value;

          let ruralPopulationResponse = await axios.get(
            `https://api.worldbank.org/v2/country/${location["Country code"]}/indicator/SP.RUR.TOTL?format=json&date=2021`
          );

          let ruralPopulation = ruralPopulationResponse.data[1][0].value;

          let urbanElectricityResponse = await axios.get(
            `https://api.worldbank.org/v2/country/${location["Country code"]}/indicator/EG.ELC.ACCS.UR.ZS?format=json&date=2021`
          );

          let urbanElectricity = urbanElectricityResponse.data[1][0].value;

          let ruralElectricityResponse = await axios.get(
            `https://api.worldbank.org/v2/country/${location["Country code"]}/indicator/EG.ELC.ACCS.RU.ZS?format=json&date=2021`
          );

          let ruralElectricity = ruralElectricityResponse.data[1][0].value;

          let foodInsecurityResponse = await axios.get(
            `https://api.worldbank.org/v2/country/${location["Country code"]}/indicator/SN.ITK.SVFI.ZS?format=json&date=2021`
          );

          let foodInsecurity = foodInsecurityResponse.data[1][0].value;

          let underweightResponse = await axios.get(
            `https://api.worldbank.org/v2/country/${location["Country code"]}/indicator/SH.STA.MALN.ZS?format=json&date=2021`
          );

          let underweight = underweightResponse.data[1][0].value;

          let physicianNumberResponse = await axios.get(
            `https://api.worldbank.org/v2/country/${location["Country code"]}/indicator/SH.MED.PHYS.ZS?format=json&date=2021`
          );

          // physicians per 1000
          let physicianNumber = physicianNumberResponse.data[1][0].value;

          let hospitalBedResponse = await axios.get(
            `https://api.worldbank.org/v2/country/${location["Country code"]}/indicator/SH.MED.BEDS.ZS?format=json&date=2021`
          );

          // beds per 1000
          let hospitalBed = hospitalBedResponse.data[1][0].value;

          let healthcareExpenditureResponse = await axios.get(
            `https://api.worldbank.org/v2/country/${location["Country code"]}/indicator/SH.XPD.CHEX.PC.CD?format=json&date=2021`
          );

          let healthcareExpenditure =
            healthcareExpenditureResponse.data[1][0].value;

          let lifeExpectancyResponse = await axios.get(
            `https://api.worldbank.org/v2/country/${location["Country code"]}/indicator/SP.DYN.LE00.IN?format=json&date=2021`
          );

          let lifeExpectancy = lifeExpectancyResponse.data[1][0].value;

          let infantMortalityResponse = await axios.get(
            `https://api.worldbank.org/v2/country/${location["Country code"]}/indicator/SP.DYN.IMRT.IN?format=json&date=2021`
          );

          // per 1000 births
          let infantMortality = infantMortalityResponse.data[1][0].value;

          let maternalMortalityResponse = await axios.get(
            `https://api.worldbank.org/v2/country/${location["Country code"]}/indicator/SH.STA.MMRT.NE?format=json&date=2021`
          );

          // per 100 000 births
          let maternalMortality = maternalMortalityResponse.data[1][0].value;

          let underFiveMortalityResponse = await axios.get(
            `https://api.worldbank.org/v2/country/${location["Country code"]}/indicator/SH.DYN.MORT?format=json&date=2021`
          );

          // per 1 000 births
          let underFiveMortality = underFiveMortalityResponse.data[1][0].value;

          let percentPopulationSafeWaterAccessResponse = await axios.get(
            `https://api.worldbank.org/v2/country/${location["Country code"]}/indicator/SH.H2O.SMDW.ZS?format=json&date=2021`
          );

          let percentPopulationSafeWaterAccess =
            percentPopulationSafeWaterAccessResponse.data[1][0].value;

          // billion m3
          let totalWaterWithdrawalResponse = await axios.get(
            `https://api.worldbank.org/v2/country/${location["Country code"]}/indicator/ER.H2O.FWTL.K3?format=json&date=2021`
          );

          let totalWaterWithdrawal =
            totalWaterWithdrawalResponse.data[1][0].value;

          return {
            ...location,
            ["Urban population"]: urbanPopulation,
            ["Rural population"]: ruralPopulation,
            ["Urban electricity access"]: urbanElectricity,
            ["Rural electricity access"]: ruralElectricity,
            ["Severe food insecurity"]: foodInsecurity,
            ["Underweight"]: underweight,
            ["Number of primary care physicians per 1000"]: physicianNumber,
            ["Number of hospital beds per 1000"]: hospitalBed,
            ["Healthcare spending per capita"]: healthcareExpenditure,
            ["Life expectancy in years"]: lifeExpectancy,
            ["Infant Mortality Rate"]: infantMortality,
            ["Maternal Mortality Rate"]: maternalMortality,
            ["Under 5 Mortality Rate"]: underFiveMortality,
            ["Percent of population with reliable access to safe drinking water"]:
              percentPopulationSafeWaterAccess,
            ["Total annual freshwater withdrawals billion m3"]:
              totalWaterWithdrawal,
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
