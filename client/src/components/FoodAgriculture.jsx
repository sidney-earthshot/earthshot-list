import React, { useState } from "react";
import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";
Chart.register(ChartDataLabels);
import { Pie } from "react-chartjs-2";

const subCategories = [
  "Supply",
  "Food Waste per Capita",
  "Productivity",
  "Food Spoilage",
  "Cost of Food",
  "Current Expenditure",
  "Nutrient Deficiency Prevalency",
  "Malnutrition",
];

export default function FoodAgriculture() {
  const [currentSubTab, setCurrentSubTab] = useState("Supply");

  const data = {
    labels: ["Animal Based", "Plant Based"],
    datasets: [
      {
        label: "Amount",
        data: [41.25, 64.04],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 2,
      },
    ],
  };

  const options = {
    plugins: {
      title: {
        display: true,
        text: "Protein Source Breakdown in grams (g)",
        color: "white",
      },
      legend: {
        labels: {
          color: "white",
        },
      },
      datalabels: {
        color: "white",
        formatter: function (value) {
          return `${value}g`;
        },
      },
      tooltip: {
        callbacks: {
          label: (item) => `${item.dataset.label}: ${item.formattedValue}g`,
        },
      },
    },
  };

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
        <Pie data={data} options={options} />
      </div>
    </div>
  );
}
