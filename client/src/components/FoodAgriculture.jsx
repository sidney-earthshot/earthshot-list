import { useState } from "react";
import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";
Chart.register(ChartDataLabels);
import { Pie, Doughnut, Bar } from "react-chartjs-2";
import Supply from "./Supply";
import FoodWaste from "./FoodWaste";
import Productivity from "./Productivity";
import FoodSpoilage from "./FoodSpoilage";
import CostFood from "./CostFood";
import NutrientDeficiency from "./NutrientDeficiency";
import Malnutrition from "./Malnutrition";

const subCategories = [
  "Supply",
  "Food Waste per Capita",
  "Productivity",
  "Food Spoilage",
  "Cost of Food",
  "Nutrient Deficiency Prevalency",
  "Malnutrition",
];

export default function FoodAgriculture({ info }) {
  const [currentSubTab, setCurrentSubTab] = useState("Supply");

  return (
    <div className="flex h-[815px]">
      {/* left */}
      <div className="flex w-1/6 flex-col overflow-y-auto bg-gray-400">
        {subCategories.map((subCategory) => {
          return (
            <button
              key={subCategory}
              className={`border-b-2 px-2 py-4 text-lg font-bold ${currentSubTab === subCategory ? "border-l-4 border-l-gray-800 bg-gray-600 text-red-600 transition ease-in-out" : "border-r-2 text-white hover:bg-gray-300"}`}
              onClick={() => {
                setCurrentSubTab(subCategory);
              }}
            >
              {subCategory}
            </button>
          );
        })}
      </div>

      {/* right */}
      <div className="w-5/6 bg-gray-600">
        {currentSubTab === "Supply" ? (
          <Supply info={info} />
        ) : currentSubTab === "Food Waste per Capita" ? (
          <FoodWaste info={info} />
        ) : currentSubTab === "Productivity" ? (
          <Productivity info={info} />
        ) : currentSubTab === "Food Spoilage" ? (
          <FoodSpoilage info={info} />
        ) : currentSubTab === "Cost of Food" ? (
          <CostFood info={info} />
        ) : currentSubTab === "Nutrient Deficiency Prevalency" ? (
          <NutrientDeficiency info={info} />
        ) : currentSubTab === "Malnutrition" ? (
          <Malnutrition info={info} />
        ) : (
          <p>Error! Please Refresh</p>
        )}
      </div>
    </div>
  );
}
