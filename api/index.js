import express from "express";
import cors from "cors";
import "./loadEnvironment.js";
import locationsRouter from "./routes/locations.js";
import countriesRouter from "./routes/countries.js"
import countryRouter from "./routes/country.js"

const PORT = 3000;
const app = express();

app.use(cors());
app.use(express.json());

// Load the /posts routes
app.use("/api/locations", locationsRouter);
app.use("/api/countries", countriesRouter);
app.use("/api/country", countryRouter);

// Global error handling
app.use((err, _req, res, next) => {
  res.status(500).send("Uh oh! An unexpected error occured.");
});

// start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
