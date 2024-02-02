import React, { useState } from "react";
import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";
Chart.register(ChartDataLabels);
import { Pie, Doughnut, Bar } from "react-chartjs-2";

export default function NutrientDeficiency() {
  const barData1 = {
    labels: [
      "Vitamin A",
      "Vitamin B",
      "Vitamin C",
      "Vitamin D",
      "Vitamin E",
      "Vitamin K",
      "Iron",
      "Calcium",
      "Magnesium",
      "Iodine",
      "Selenium",
      "Folate",
    ],
    datasets: [
      {
        label: "Prevalence",
        data: [1, 2, 4, 6, 7, 10, 2, 3, 6, 10, 2, 3],
        backgroundColor: ["rgba(255, 99, 132, 1)"],
      },
    ],
  };

  const barData2 = {
    labels: ["Carbohydrates", "Proteins", "Fats"],
    datasets: [
      {
        label: "Prevalence",
        data: [2.46, 1.18, 20.0],
        backgroundColor: ["rgba(255, 99, 132, 1)"],
      },
    ],
  };

  const barOptions1 = {
    indexAxis: "x",
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 2.8, //affects the height by adjusting ratio
    plugins: {
      legend: {
        display: false,
        labels: {
          color: "white",
        },
      },
      title: {
        display: true,
        text: "Micro Nutrient Deficiencies",
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
          text: "Micro Nutrient",
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
        max: 14,
      },
    },
  };

  const barOptions2 = {
    indexAxis: "x",
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 2.8, //affects the height by adjusting ratio
    plugins: {
      legend: {
        display: false,
        labels: {
          color: "white",
        },
      },
      title: {
        display: true,
        text: "Macro Nutrient Deficiencies",
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
          text: "Macro Nutrient",
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
        max: 21,
      },
    },
  };

  return (
    <div className="flex flex-col p-5 justify-center space-y-12 mt-8">
      <Bar data={barData1} options={barOptions1} className="rounded-xl" />
      <Bar data={barData2} options={barOptions2} className="rounded-xl" />
    </div>
  );
}
