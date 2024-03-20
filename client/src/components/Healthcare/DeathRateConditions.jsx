import React, { useState, useEffect } from "react";
import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";
Chart.register(ChartDataLabels);
import { Pie, Doughnut, Bar } from "react-chartjs-2";

export default function DeathRateConditions({ info }) {
  const [indexAxis, setIndexAxis] = useState("x");

  function stringToNumber(string) {
    if (string === null || string === undefined || string === "") {
      return "N/A";
    } else if (typeof string === "number") {
      return string; // Return the number directly if the input is already a number
    } else if (typeof string === "string") {
      const match = string.match(/[+-]?([0-9]*[.])?[0-9]+/); // Match a floating point number in the string
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
      "Cancer",
      "Diarrhea Complications",
      "Cardiovascular Disease",
      "Stroke",
      "Alzheimer's",
      "Hypertension Related",
      "Diabetes",
      "Suicide",
      "Obesity",
      "Alcohol Related",
      "Substance Abuse",
      "HIV/AIDS",
    ],
    datasets: [
      {
        label: "Deaths per 100 000 people",
        data: [
          stringToNumber(info["Cancer deaths per 100 000"]),
          stringToNumber(info["Diarrhea deaths per 100 000"]),
          stringToNumber(info["Cardiovascular deaths per 100 000"]),
          stringToNumber(info["Stroke deaths per 100 000"]),
          stringToNumber(info["Alzheimer’s deaths per 100"]),
          stringToNumber(info["Hypertension deaths per 100 000"]),
          stringToNumber(info["Diabetes deaths per 100 000"]),
          stringToNumber(info["Suicide per 100 000"]),
          stringToNumber(info["Obesity deaths per 100 000"]),
          stringToNumber(info["Alcohol deaths per 100 000"]),
          stringToNumber(info["Substance use deaths per 100 000"]),
          stringToNumber(info["HIV AIDS deaths per 100 000"]),
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
        text: "Death Rate of Conditions",
        color: "white",
      },
      datalabels: {
        color: "white",
        anchor: "end",
        align: "end",
        offset: 5,
        formatter: function (value, context) {
          return `${value}`;
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
          text: "Condition",
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
          text: "Deaths",
          color: "white",
        },
      },
    },
  };

  return (
    <div className="flex h-full w-full flex-col p-5 xs:p-2">
      <div className="m-12 flex h-full justify-center">
        <Bar data={barData} options={barOptions} className="rounded-xl" />
      </div>
    </div>
  );
}
