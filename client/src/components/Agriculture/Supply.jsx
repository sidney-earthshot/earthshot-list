import React, { useState } from "react";
import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";
Chart.register(ChartDataLabels);
import { Pie, Doughnut, Bar } from "react-chartjs-2";

export default function Supply({ info }) {
  function gramsToNumber(string) {
    if (string) {
      // Use a regular expression to match numbers with optional decimal places
      const match = string.match(/(\d+(\.\d+)?)/);
      // The first captured group is the number, convert it to a float
      return match ? parseFloat(match[0]) : null;
    } else {
      return "N/A";
    }
  }

  function calToNumber(string) {
    if (string) {
      // Remove commas and any non-digit characters except for the decimal point
      const numericString = string.replace(/[^0-9.]+/g, "");
      // Convert the cleaned string to a number
      return parseFloat(numericString);
    } else {
      return "N/A";
    }
  }

  const pieData = {
    labels: ["Animal Based", "Plant Based"],
    datasets: [
      {
        label: "Amount",
        data: [
          gramsToNumber(info["Supply from animal-based foods"]),
          gramsToNumber(info["Supply from plant-based foods"]),
        ],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 2,
        offset: 10,
      },
    ],
  };

  const pieOptions = {
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 1,
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
        formatter: function (value, context) {
          return `${Math.round((value / (context.dataset.data[0] + context.dataset.data[1])) * 100)} %`;
        },
        font: {
          size: 20,
        },
      },
      tooltip: {
        callbacks: {
          label: (item) => `${item.dataset.label}: ${item.formattedValue}g`,
        },
      },
    },
  };

  const doughnutData = {
    labels: ["Minimum Daily Requirement", "Excess Calories"],
    datasets: [
      {
        label: "Amount",
        data: [
          calToNumber(info["Minimum dietary energy requirement"]),
          calToNumber(info["Caloric supply per capita"]) -
            calToNumber(info["Minimum dietary energy requirement"]),
        ],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 2,
        offset: 10,
      },
    ],
  };

  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 1,
    plugins: {
      title: {
        display: true,
        text: "Caloric Supply per Capita (kcal)",
        color: "white",
      },
      legend: {
        labels: {
          color: "white",
        },
      },
      datalabels: {
        color: "white",
        formatter: function (value, context) {
          return `${Math.round((value / (context.dataset.data[0] + context.dataset.data[1])) * 100)} %`;
        },
        font: {
          size: 12,
        },
      },
      tooltip: {
        callbacks: {
          label: (item) => `${item.dataset.label}: ${item.formattedValue} kcal`,
        },
      },
      subtitle: {
        display: true,
        color: "white",
        text: `Daily Total: ${info["Caloric supply per capita"]} kcal`,
      },
    },
  };

  const barData = {
    labels: ["Total Protein", "Total Fat"],
    datasets: [
      {
        label: "Amount",
        data: [
          gramsToNumber(info["Protein supply per capita"]),
          gramsToNumber(info["Fat supply per capita"]),
        ],
        backgroundColor: ["rgba(255, 99, 132, 1)"],
      },
    ],
  };

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    aspectRatio: 1,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: "white",
        },
      },
      title: {
        display: true,
        text: "Dietary Supply Breakdown",
        color: "white",
        padding: 20,
      },
      datalabels: {
        color: "white",
        anchor: "end",
        align: "top",
        formatter: function (value) {
          return `${value} g`;
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
          text: "Amount in grams (g)",
          color: "white",
        },
      },
    },
  };

  return (
    <div className="h-full overflow-y-auto">
      <div className="flex justify-center py-6 xs:flex-col xs:space-y-4 md:h-1/2 md:flex-row">
        <div className="flex justify-center xs:w-full md:w-1/2">
          <Pie data={pieData} options={pieOptions} />
        </div>
        <div className="flex justify-center xs:w-full md:w-1/2">
          <Doughnut data={doughnutData} options={doughnutOptions} />
        </div>
      </div>
      <div className="flex h-1/2 justify-center">
        <div className="flex justify-center p-2 xs:w-[90%] md:w-1/2">
          <Bar data={barData} options={barOptions} />
        </div>
      </div>
    </div>
  );
}
