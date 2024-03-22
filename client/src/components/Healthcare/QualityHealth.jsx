import React, { useState, useEffect } from "react";
import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";
Chart.register(ChartDataLabels);
import { Pie, Doughnut, Bar } from "react-chartjs-2";

export default function QualityHealth({ info }) {
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

  const barData = {
    labels: [
      "Infant Mortality Rate",
      "Maternal Mortality Rate",
      "Under 5 Mortality Rate",
      "Neonatal Mortality Rate per 100 Live Births",
    ],
    datasets: [
      {
        label: "Percentage",
        data: [
          stringToNumber(info["Infant Mortality Rate"]),
          stringToNumber(info["Maternal Mortality Rate"]),
          stringToNumber(info["Under 5 Mortality Rate"]),
          Math.round(
            stringToNumber(
              info["Neonatal mortality rate per 100 live births"]
            ) * 100
          ) / 100,
        ],
        backgroundColor: ["rgba(255, 99, 132, 1)"],
      },
    ],
  };

  const barOptions = {
    indexAxis: indexAxis,
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
        text: "Mortality Rates",
        color: "white",
      },
      datalabels: {
        color: "white",
        anchor: "end",
        align: "end",
        offset: 5,
        formatter: function (value, context) {
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
          text: "Age Bracket",
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
          text: "Percentage",
          color: "white",
        },
      },
    },
  };

  return (
    <div className="h-full overflow-y-auto">
      <div className="flex flex-col xs:h-[120%] xs:p-2 md:h-full md:p-4">
        {/* rounded removes top left artefact */}
        <div className="h-full">
          <Bar data={barData} options={barOptions} className="rounded-lg" />
        </div>
      </div>
    </div>
  );
}
