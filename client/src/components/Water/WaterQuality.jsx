import React, { useState, useEffect } from "react";
import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";
Chart.register(ChartDataLabels);
import { Pie, Doughnut, Bar } from "react-chartjs-2";

export default function WaterQuality({ info }) {
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

  const barData = {
    labels: ["Ammonia", "Nitrate", "Phosphorus"],
    datasets: [
      {
        label: "Concentration mg/L",
        data: [
          stringToNumber(info["Ammonia concentration in rivers"]),
          stringToNumber(info["Nitrate concentrations in rivers"]),
          stringToNumber(info["Average phosphorus concentration in rivers"]),
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
        text: "Pollutant Concentrations in Rivers",
        color: "white",
      },
      datalabels: {
        color: "white",
        anchor: "center",
        align: "end",
        offset: 5,
        formatter: function (value) {
          return `${value}mg/L`;
        },
      },
      tooltip: {
        callbacks: {
          label: (item) => `${item.dataset.label}: ${item.formattedValue}`,
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
          text: "Pollutant",
          color: "white",
        },
      },
      y: {
        ticks: {
          color: "white", // Y-axis labels (ticks)
          font: {
            size: 9.5,
          },
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)", // Y-axis lines
          borderColor: "white", // Y-axis border
        },
        title: {
          display: true,
          text: "Concentration",
          color: "white",
        },
      },
    },
  };

  return (
    <div className="flex h-full w-full flex-col p-5 xs:p-2">
      <div className="gap-3 p-4 xs:flex xs:h-2/5 xs:overflow-y-auto md:grid md:h-1/5 md:grid-cols-3 md:overflow-visible">
        <div className="flex flex-col justify-between rounded-lg bg-sky-200">
          <div className="rounded-t-lg bg-[#FDD1BA] p-3 xs:w-[180px] md:w-full">
            <h2 className="md:text-md font-bold underline xs:text-sm">
              Drinking Water Quality Index
            </h2>
          </div>

          <div className="p-3">
            <h3 className="mb-3 text-sm">
              {info["Drinking Water Quality Index"]
                ? `${info["Drinking Water Quality Index"]}`
                : "N/A"}
            </h3>
          </div>
        </div>

        <div className="flex flex-col justify-between rounded-lg bg-sky-200">
          <div className="rounded-t-lg bg-[#FDD1BA] p-3 xs:w-[250px] md:w-full">
            <h2 className="md:text-md font-bold underline xs:text-sm">
              Health Water Quality Index
            </h2>
          </div>

          <div className="p-3">
            <h3 className="mb-3 text-sm">
              {info["Health Water Quality Index"]
                ? info["Health Water Quality Index"]
                : "N/A"}
            </h3>
          </div>
        </div>

        <div className="flex flex-col justify-between rounded-lg bg-sky-200">
          <div className="rounded-t-lg bg-[#FDD1BA] p-3 xs:w-[210px] md:w-full">
            <h2 className="md:text-md font-bold underline xs:text-sm">
              Acceptability Water Quality Index
            </h2>
          </div>

          <div className="p-3">
            <h3 className="mb-3 text-sm">
              {info["Acceptability Water Quality Index"]
                ? info["Acceptability Water Quality Index"]
                : "N/A"}
            </h3>
          </div>
        </div>
      </div>

      <div className="mt-12 flex h-3/5 justify-center">
        <Bar data={barData} options={barOptions} className="rounded-[100px]" />
      </div>
    </div>
  );
}
