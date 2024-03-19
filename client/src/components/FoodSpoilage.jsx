import React, { useState } from "react";
import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";
Chart.register(ChartDataLabels);
import { Pie, Doughnut, Bar } from "react-chartjs-2";

export default function FoodSpoilage({ info }) {
  const pieData = {
    labels: [
      "Production & Processing",
      "Transportation",
      "Retailers (Markets, Stores)",
      "In House",
    ],
    datasets: [
      {
        label: "Food Waste",
        data: [
          info["Production & Processing"]
            ? info["Production & Processing"]
            : "",
          info["Transportation"] ? info["Transportation"] : "",
          info["Retailers"] ? info["Retailers"] : "",
          info["In house"] ? info["In house"] : "",
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
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
        text: "Food Waste Due to Spoilage",
        color: "white",
      },
      legend: {
        labels: {
          color: "white",
        },
      },
      datalabels: {
        color: "white",
        // formatter: function (value, context) {
        //   return `${Math.round((value / (context.dataset.data[0] + context.dataset.data[1] + context.dataset.data[2] + context.dataset.data[3])) * 100)} %`;
        // },
        formatter: function (value, context) {
          const dataSum = context.dataset.data.reduce(
            (acc, curr) => acc + curr,
            0
          );
          if (!value || dataSum === 0) {
            return ""; // Return an empty string if the value is falsy or the sum of the data is 0
          }
          return `${Math.round((value / dataSum) * 100)} %`;
        },
        font: {
          size: 20,
        },
      },
      tooltip: {
        callbacks: {
          label: (item) => {
            `${item.dataset.label}: ${item.formattedValue}%` || "";
          },
        },
      },
      subtitle: {
        display: true,
        color: "white",
        text: `Total Waste from Initial Production: ${info["Percent of food wasted from moment of production"] ? info["Percent of food wasted from moment of production"] : "N/A"}`,
      },
    },
  };

  return (
    <>
      <div className="flex h-full justify-center p-5">
        <Pie data={pieData} options={pieOptions} />
      </div>
    </>
  );
}
