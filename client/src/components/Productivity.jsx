import React, { useState } from "react";
import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";
Chart.register(ChartDataLabels);
import { Pie, Doughnut, Bar } from "react-chartjs-2";

export default function Productivity({ info }) {
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
          Math.round(info["Rainfed Maize"] * 100) / 100,
          Math.round(info["Rainfed Rice"] * 100) / 100,
          Math.round(info["Rainfed Wheat"] * 100) / 100,
          Math.round(info["Rainfed Sorghum"] * 100) / 100,
          Math.round(info["Rainfed Millet"] * 100) / 100,
          Math.round(info["Rainfed Barley"] * 100) / 100,
          Math.round(info["Rainfed Soybean"] * 100) / 100,
          Math.round(info["Rainfed Common Bean"] * 100) / 100,
          Math.round(info["Rainfed Faba Bean"] * 100) / 100,
          Math.round(info["Rainfed Pea"] * 100) / 100,
          Math.round(info["Rainfed Chickpea"] * 100) / 100,
          Math.round(info["Rainfed Cowpea"] * 100) / 100,
          Math.round(info["Rainfed Pigeonpea"] * 100) / 100,
          Math.round(info["Rainfed Groundnut"] * 100) / 100,
          Math.round(info["Rainfed Potato"] * 100) / 100,
          Math.round(info["Rainfed Sugarcane"] * 100) / 100,
          Math.round(info["Rainfed Rapeseed"] * 100) / 100,
          Math.round(info["Rainfed Oil Palm"] * 100) / 100,
        ],
        backgroundColor: ["rgba(255, 99, 132, 1)"],
      },
      {
        label: "Irrigation",
        data: [
          Math.round(info["Irrigated Maize"] * 100) / 100,
          Math.round(info["Irrigated Rice"] * 100) / 100,
          Math.round(info["Irrigated Wheat"] * 100) / 100,
          Math.round(0),
          Math.round(0),
          Math.round(info["Irrigated Barley"] * 100) / 100,
          Math.round(info["Irrigated Soybean"] * 100) / 100,
          Math.round(info["Irrigated Common Bean"] * 100) / 100,
          Math.round(0),
          Math.round(info["Irrigated Pea"] * 100) / 100,
          Math.round(0),
          Math.round(0),
          Math.round(0),
          Math.round(0),
          Math.round(info["Irrigated Potato"] * 100) / 100,
          Math.round(info["Irrigated Sugarcane"] * 100) / 100,
          Math.round(info["Irrigated Rapeseed"] * 100) / 100,
          Math.round(0),
        ],
        backgroundColor: ["rgba(54, 162, 235, 1)"],
      },
    ],
  };

  const barOptions = {
    indexAxis: "x",
    responsive: true,
    maintainAspectRatio: false,
    aspectRatio: 1, //affects the height by adjusting ratio
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
          text: "Crop",
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
          text: "Yield",
          color: "white",
        },
      },
    },
  };

  return (
    <>
      <div className="flex flex-col p-6">
        {/* rounded removes top left artefact */}
        <div className="h-96">
          <Bar data={barData} options={barOptions} className="rounded-xl" />
        </div>
      </div>

      <div className="mx-6 grid grid-cols-3 gap-3">
        <div className="flex flex-col justify-between rounded-lg bg-sky-200">
          <div className="rounded-t-lg bg-red-100 p-3">
            <h2 className="text-lg font-bold underline">
              Agricultural Water Withdrawal
            </h2>
          </div>

          <div className="p-3">
            <h3 className="mb-3 text-sm">
              {info["Agricultural water withdrawal"]
                ? info["Agricultural water withdrawal"]
                : "N/A"}
            </h3>
          </div>
        </div>

        <div className="flex flex-col justify-between rounded-lg bg-sky-200">
          <div className="rounded-t-lg bg-red-100 p-3">
            <h2 className="text-lg font-bold underline">
              Fertilizer Use per Unit of Land
            </h2>
          </div>

          <div className="p-3">
            <h3 className="mb-3 text-sm">
              {info["Fertilizer use per unit of land"]
                ? info["Fertilizer use per unit of land"]
                : "N/A"}
            </h3>
          </div>
        </div>

        <div className="flex flex-col justify-between rounded-lg bg-sky-200">
          <div className="rounded-t-lg bg-red-100 p-3">
            <h2 className="text-lg font-bold underline">Crop land</h2>
          </div>

          <div className="p-3">
            <h3 className="mb-3 text-sm">
              {info["Crop land percent"] ? info["Crop land percent"] : "N/A"}
            </h3>
          </div>
        </div>

        <div className="flex flex-col justify-between rounded-lg bg-sky-200">
          <div className="rounded-t-lg bg-red-100 p-3">
            <h2 className="text-lg font-bold underline">
              Agriculture Factor Productivity
            </h2>
          </div>

          <div className="p-3">
            <h3 className="mb-3 text-sm">
              {info["Agriculture factor productivity"]
                ? info["Agriculture factor productivity"]
                : "N/A"}
            </h3>
          </div>
        </div>

        <div className="flex flex-col justify-between rounded-lg bg-sky-200">
          <div className="rounded-t-lg bg-red-100 p-3">
            <h2 className="text-lg font-bold underline">
              Agricultural R&D (in millions USD)
            </h2>
          </div>

          <div className="p-3">
            <h3 className="mb-3 text-sm">
              {info["Agricultural R&D in millions USD"]
                ? info["Agricultural R&D in millions USD"]
                : "N/A"}
            </h3>
          </div>
        </div>

        <div className="flex flex-col justify-between rounded-lg bg-sky-200">
          <div className="rounded-t-lg bg-red-100 p-3">
            <h2 className="text-lg font-bold underline">Soil Erosion</h2>
          </div>

          <div className="p-3">
            <h3 className="mb-3 text-sm">
              {info["Soil erosion"] ? info["Soil erosion"] : "N/A"}
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}
