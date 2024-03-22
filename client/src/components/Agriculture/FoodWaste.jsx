import React, { useState } from "react";
import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";
Chart.register(ChartDataLabels);
import { Pie, Doughnut, Bar } from "react-chartjs-2";

export default function FoodWaste({ info }) {
  // function gramsToNumber(string) {
  //   if (string) {
  //     // Use a regular expression to match numbers with optional decimal places
  //     const match = string.match(/(\d+(\.\d+)?)/);
  //     // The first captured group is the number, convert it to a float
  //     return match ? parseFloat(match[0]) : null;
  //   } else {
  //     return 0;
  //   }
  // }

  function stringToNumber(string) {
    if (string === null || string === undefined || string === "") {
      return "N/A";
    } else if (typeof string === "number") {
      return string; // Return the number directly if the input is already a number
    } else if (typeof string === "string") {
      // Remove non-numeric characters except decimal point and sign, and also remove commas
      const numericString = string.replace(/[^0-9.-]+/g, "").replace(/,/g, "");
      const match = numericString.match(/[+-]?([0-9]*[.])?[0-9]+/); // Match a floating point number in the string
      return match ? parseFloat(match[0]) : "N/A"; // Parse the matched string as a float, or return "N/A" if no match
    } else {
      return "N/A"; // Return "N/A" for any other type of input
    }
  }

  const pieData = {
    labels: ["Retail", "Out of Home Consumption", "Household"],
    datasets: [
      {
        label: "Amount",
        data: [
          stringToNumber(info["Retail"]),
          stringToNumber(info["Out of home consumption"]),
          stringToNumber(info["Household"]),
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 2,
        offset: 10,
      },
    ],
  };

  const pieOptions = {
    plugins: {
      title: {
        display: true,
        text: "Food Waste per Capita (kg)",
        color: "white",
        font: {
          size: 20,
        },
      },
      legend: {
        labels: {
          color: "white",
        },
      },
      datalabels: {
        color: "white",
        formatter: function (value, context) {
          return `${Math.round((value / (context.dataset.data[0] + context.dataset.data[1] + context.dataset.data[2])) * 100)} %`;
        },
        font: {
          size: 15,
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
    <div className="flex h-full items-center justify-center md:py-10">
      <Pie data={pieData} options={pieOptions} />
    </div>
  );
}
