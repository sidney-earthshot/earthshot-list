import React, { useState } from "react";
import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";
Chart.register(ChartDataLabels);
import { Pie, Doughnut, Bar } from "react-chartjs-2";

export default function Productivity() {
  const barData = {
    labels: [
      "Maize",
      "Rice",
      "Wheat",
      "Sorghum",
      "Millet",
      "Barley",
      "Soybean",
      "Common Bean",
      "Faba Bean",
      "Pea",
      "Chickpea",
      "Cowpea",
      "Pigeonpea",
      "Groundnut",
      "Potato",
      "Sugarcane",
      "Rapeseed",
      "Oil Palm",
    ],
    datasets: [
      {
        label: "Rainfed",
        data: [
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
        ],
        backgroundColor: ["rgba(255, 99, 132, 1)"],
      },
      {
        label: "Irrigation",
        data: [
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
        ],
        backgroundColor: ["rgba(54, 162, 235, 1)"],
      },
    ],
  };

  const barOptions = {
    indexAxis: "x",
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 1.8, //affects the height by adjusting ratio
    plugins: {
      legend: {
        display: true,
        labels: {
          color: "white",
        },
      },
      title: {
        display: true,
        text: "Crop Yield Gap",
        color: "white",
      },
      datalabels: {
        color: "white",
        anchor: "end",
        align: "end",
        offset: 5,
        formatter: function (value, context) {
          return;
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "white", // X-axis labels (ticks)
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)", // X-axis lines
          borderColor: "white", // X-axis border
        },
        title: {
          display: true,
          text: "Yield",
          color: "white",
        },
      },
      y: {
        ticks: {
          color: "white", // Y-axis labels (ticks)
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)", // Y-axis lines
          borderColor: "white", // Y-axis border
        },
        title: {
          display: true,
          text: "Crop",
          color: "white",
        },
      },
    },
  };

  return (
    <>
      <div className="flex flex-col p-3">
        {/* rounded removes top left artefact */}
        <Bar data={barData} options={barOptions} className="rounded-xl" /> 
      </div>

      <div className="grid grid-cols-3 gap-3 mx-6">
        <div className="flex flex-col justify-between rounded-lg bg-sky-200">
          <div className="rounded-t-lg bg-red-100 p-3">
            <h2 className="text-lg font-bold underline">
              Agricultural Water Withdrawal
            </h2>
          </div>

          <div className="p-3">
            <h3 className="mb-3 text-sm">N/A</h3>
          </div>
        </div>

        <div className="flex flex-col justify-between rounded-lg bg-sky-200">
          <div className="rounded-t-lg bg-red-100 p-3">
            <h2 className="text-lg font-bold underline">
              Fertilizer Use per Unit of Land
            </h2>
          </div>

          <div className="p-3">
            <h3 className="mb-3 text-sm">393.22kg</h3>
          </div>
        </div>

        <div className="flex flex-col justify-between rounded-lg bg-sky-200">
          <div className="rounded-t-lg bg-red-100 p-3">
            <h2 className="text-lg font-bold underline">Crop land</h2>
          </div>

          <div className="p-3">
            <h3 className="mb-3 text-sm">527,714,000.00 ha</h3>
          </div>
        </div>

        <div className="flex flex-col justify-between rounded-lg bg-sky-200">
          <div className="rounded-t-lg bg-red-100 p-3">
            <h2 className="text-lg font-bold underline">
              Agriculture Factor Productivity
            </h2>
          </div>

          <div className="p-3">
            <h3 className="mb-3 text-sm">0.97</h3>
          </div>
        </div>

        <div className="flex flex-col justify-between rounded-lg bg-sky-200">
          <div className="rounded-t-lg bg-red-100 p-3">
            <h2 className="text-lg font-bold underline">
              Agricultural R&D (in millions USD)
            </h2>
          </div>

          <div className="p-3">
            <h3 className="mb-3 text-sm">East Asia and Pacific</h3>
          </div>
        </div>

        <div className="flex flex-col justify-between rounded-lg bg-sky-200">
          <div className="rounded-t-lg bg-red-100 p-3">
            <h2 className="text-lg font-bold underline">Soil Erosion</h2>
          </div>

          <div className="p-3">
            <h3 className="mb-3 text-sm">N/A</h3>
          </div>
        </div>
      </div>
    </>
  );
}
