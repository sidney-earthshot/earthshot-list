import React, { useState } from "react";
import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";
Chart.register(ChartDataLabels);
import { Pie, Doughnut, Bar } from "react-chartjs-2";

export default function CostFood() {
  const barData1 = {
    labels: ["Food Expenditure", "Consumer Expenditure"],
    datasets: [
      {
        label: "Amount in $USD",
        data: [936.0, 4680.0],
        backgroundColor: ["rgba(255, 99, 132, 1)"],
      },
    ],
  };

  const barData2 = {
    labels: [
      "% of Average Income (CoNA)",
      "% of Average Income (CoCA)",
      "Food % of Consumer Expenditure",
    ],
    datasets: [
      {
        label: "%",
        data: [2.46, 1.18, 20.0],
        backgroundColor: ["rgba(255, 99, 132, 1)"],
      },
    ],
  };

  const barOptions1 = {
    indexAxis: "y",
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 2.8, //affects the height by adjusting ratio
    plugins: {
      legend: {
        display: true,
        labels: {
          color: "white",
        },
      },
      title: {
        display: true,
        text: "Expenditure in $USD",
        color: "white",
      },
      datalabels: {
        color: "white",
        anchor: "end",
        align: "end",
        offset: 10,
        formatter: function (value) {
          return `$${value}`;
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
          text: "$ in USD",
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
          text: "Cost Type",
          color: "white",
        },
      },
    },
  };

  const barOptions2 = {
    indexAxis: "y",
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 2.8, //affects the height by adjusting ratio
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
        offset: 10,
        formatter: function (value) {
          return `${value}%`;
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
        max: 21,
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
    <div className="flex w-full flex-col">
      <div className="grid grid-cols-3 gap-3 p-4">
        <div className="flex flex-col justify-between rounded-lg bg-sky-200">
          <div className="rounded-t-lg bg-red-100 p-3">
            <h2 className="text-lg font-bold underline">
              Cost of Nutrient Adequacy (CoNA)
            </h2>
          </div>

          <div className="p-3">
            <h3 className="mb-3 text-sm">1.29</h3>
          </div>
        </div>

        <div className="flex flex-col justify-between rounded-lg bg-sky-200">
          <div className="rounded-t-lg bg-red-100 p-3">
            <h2 className="text-lg font-bold underline">
              Cost of Caloric Adequacy (CoCA)
            </h2>
          </div>

          <div className="p-3">
            <h3 className="mb-3 text-sm">0.62</h3>
          </div>
        </div>

        <div className="flex flex-col justify-between rounded-lg bg-sky-200">
          <div className="rounded-t-lg bg-red-100 p-3">
            <h2 className="text-lg font-bold underline">
              Premium of CoNA vs. CoCA
            </h2>
          </div>

          <div className="p-3">
            <h3 className="mb-3 text-sm">210%</h3>
          </div>
        </div>
      </div>

      <div className="p-5">
        <Bar data={barData1} options={barOptions1} className="rounded-xl" />

        <Bar data={barData2} options={barOptions2} className="rounded-xl" />
      </div>
    </div>
  );
}
