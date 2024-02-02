import React, { useState } from "react";
import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";
Chart.register(ChartDataLabels);
import { Pie, Doughnut, Bar } from "react-chartjs-2";

export default function Malnutrition() {
  const barData1 = {
    labels: [
      "Prevalence of Undernourishment",
      "Prevalence of Stunting",
      "Prevalence of Wasting",
    ],
    datasets: [
      {
        label: "Prevalence",
        data: [3.0, 4.7, 1.9],
        backgroundColor: ["rgba(255, 99, 132, 1)"],
      },
    ],
  };

  const barOptions1 = {
    indexAxis: "x",
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 2, //affects the height by adjusting ratio
    plugins: {
      legend: {
        display: false,
        labels: {
          color: "white",
        },
      },
      title: {
        display: true,
        text: "Malnutrition Prevalence",
        color: "white",
      },
      datalabels: {
        color: "white",
        anchor: "end",
        align: "end",
        offset: 5,
        formatter: function (value) {
          return `${value}%`;
        },
      },
      tooltip: {
        callbacks: {
          label: (item) => `${item.dataset.label}: ${item.formattedValue}%`,
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
          text: "Type of Malnutrition",
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
          text: "Prevalence",
          color: "white",
        },
      },
    },
  };
  return (
    <>
      <div className="grid grid-cols-3 gap-3 p-4">
        <div className="flex flex-col justify-between rounded-lg bg-sky-200">
          <div className="rounded-t-lg bg-red-100 p-3">
            <h2 className="text-lg font-bold underline">
              Severe food insecurity
            </h2>
          </div>

          <div className="p-3">
            <h3 className="mb-3 text-sm">N/A</h3>
          </div>
        </div>

        <div className="flex flex-col justify-between rounded-lg bg-sky-200">
          <div className="rounded-t-lg bg-red-100 p-3">
            <h2 className="text-lg font-bold underline">
              Micro/Macro Nutrient Deficiency
            </h2>
          </div>

          <div className="p-3">
            <h3 className="mb-3 text-sm">N/A</h3>
          </div>
        </div>

        <div className="flex flex-col justify-between rounded-lg bg-sky-200">
          <div className="rounded-t-lg bg-red-100 p-3">
            <h2 className="text-lg font-bold underline">
              Global Hunger Index Score
            </h2>
          </div>

          <div className="p-3">
            <h3 className="mb-3 text-sm">N/A</h3>
          </div>
        </div>
      </div>

      <div className="mt-12 flex justify-center p-5">
        <Bar data={barData1} options={barOptions1} className="rounded-xl" />
      </div>
    </>
  );
}
