import React, { useState, useEffect } from "react";
import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";
Chart.register(ChartDataLabels);
import { Pie, Doughnut, Bar } from "react-chartjs-2";

export default function NutrientDeficiency({ info }) {
  const [indexAxis, setIndexAxis] = useState("x");

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

  // function percentToNumber(string) {
  //   if (string === "" || string === undefined || string === null) {
  //     return "N/A";
  //   }

  //   // Remove the percentage sign and convert to a floating-point number
  //   const number = parseFloat(string.replace("%", ""));
  //   return number;
  // }

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

  const barData1 = {
    labels: [
      "Vitamin A",
      "Vitamin C",
      "Vitamin D",
      "Vitamin E",
      "Vitamin K",
      "Iron/B12",
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
          stringToNumber(info["Vitamin A"]),
          stringToNumber(info["Vitamin C"]),
          stringToNumber(info["Vitamin D"]),
          stringToNumber(info["Vitamin E"]),
          stringToNumber(info["Vitamin K"]),
          stringToNumber(info["Iron or B12"]),
          stringToNumber(info["Calcium"]),
          stringToNumber(info["Magnesium"]),
          stringToNumber(info["Zinc"]),
          Math.round(
            100 -
              stringToNumber(
                info["Iodized salt consumption household percent"]
              )
          ),
          stringToNumber(info["Selenium"]),
          stringToNumber(info["Folate"]),
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
          stringToNumber(info["Carbohydrates"]),
          stringToNumber(info["Proteins"]),
          stringToNumber(info["Fats"]),
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
