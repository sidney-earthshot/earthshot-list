import React, { useState, useEffect } from "react";
import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";
Chart.register(ChartDataLabels);
import { Pie, Doughnut, Bar } from "react-chartjs-2";

export default function NutrientDeficiency({ info }) {
  const [indexAxis, setIndexAxis] = useState("x");

  useEffect(() => {
    // Function to update indexAxis based on window width
    const updateAxis = () => {
      const newIndexAxis = window.innerWidth < 768 ? "y" : "x"; // Assuming 768px is the breakpoint for mobile devices
      setIndexAxis(newIndexAxis);
    };

    // Call updateAxis to set initial value
    updateAxis();

    // Add event listener for window resize
    window.addEventListener("resize", updateAxis);

    // Clean up event listener on component unmount
    return () => window.removeEventListener("resize", updateAxis);
  }, []);

  function percentToNumber(string) {
    if (string === "" || string === undefined) {
      return "N/A";
    }

    // Remove the percentage sign and convert to a floating-point number
    const number = parseFloat(string.replace("%", ""));
    return number;
  }

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
      "Zinc",
      "Iodine",
      "Selenium",
      "Folate",
    ],
    datasets: [
      {
        label: "Prevalence",
        data: [
          percentToNumber(info["Vitamin A"]),
          percentToNumber(info["Vitamin B complex"]),
          percentToNumber(info["Vitamin C"]),
          percentToNumber(info["Vitamin D"]),
          percentToNumber(info["Vitamin E"]),
          percentToNumber(info["Vitamin K"]),
          percentToNumber(info["Iron"]),
          percentToNumber(info["Calcium"]),
          percentToNumber(info["Magnesium"]),
          percentToNumber(info["Zinc"]),
          percentToNumber(info["Iodine"]),
          percentToNumber(info["Selenium"]),
          percentToNumber(info["Folate"]),
        ],
        backgroundColor: ["rgba(255, 99, 132, 1)"],
      },
    ],
  };

  const barData2 = {
    labels: ["Carbohydrates", "Proteins", "Fats"],
    datasets: [
      {
        label: "Prevalence",
        data: [
          percentToNumber(info["Carbohydrates"]),
          percentToNumber(info["Proteins"]),
          percentToNumber(info["Fats"]),
        ],
        backgroundColor: ["rgba(255, 99, 132, 1)"],
      },
    ],
  };

  const barOptions1 = {
    indexAxis: indexAxis,
    responsive: true,
    maintainAspectRatio: false,
    aspectRatio: 1, //affects the height by adjusting ratio
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
        align: "center",
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
      },
    },
  };

  const barOptions2 = {
    indexAxis: "x",
    responsive: true,
    maintainAspectRatio: false,
    aspectRatio: 1, //affects the height by adjusting ratio
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
      },
    },
  };

  return (
    <div className="flex h-full flex-col p-6">
      <div className="h-1/2">
        <Bar data={barData1} options={barOptions1} className="rounded-3xl" />
      </div>
      <div className="h-1/2">
        <Bar data={barData2} options={barOptions2} className="rounded-3xl" />
      </div>
    </div>
  );
}
