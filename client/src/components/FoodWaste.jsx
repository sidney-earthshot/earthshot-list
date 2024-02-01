import React, { useState } from "react";
import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";
Chart.register(ChartDataLabels);
import { Pie, Doughnut, Bar } from "react-chartjs-2";

export default function FoodWaste() {
  const pieData = {
    labels: ["Retail", "Out of Home Consumption", "Household"],
    datasets: [
      {
        label: "Amount",
        data: [15.64, 45.6, 63.92],
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
  return (
    <div className="flex h-full justify-center py-10">
      <Pie data={pieData} options={pieOptions} />
    </div>
  );
}
