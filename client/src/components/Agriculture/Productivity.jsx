import React, { useState, useEffect } from "react";
import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";
Chart.register(ChartDataLabels);
import { Pie, Doughnut, Bar } from "react-chartjs-2";

import ModalLoading from "../ModalLoading";

export default function Productivity({ info, isModalLoading }) {
  const [indexAxis, setIndexAxis] = useState("x");

  function stringToNumber(string) {
    if (string) {
      const match = string.match(/[+-]?([0-9]*[.])?[0-9]+/); // Regular expression to match a floating point number
      return match ? parseFloat(match[0]) : NaN; // Parse the matched string as a float, or return NaN if no match
    } else {
      return 0;
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
      "Maize",
      "Rice",
      "Wheat",
      "Sorghum",
      "Millet",
      "Barley",
      "Soybean",
      "Green Bean",
      "Faba Bean",
      "Pea",
      "Chickpea",
      "Cowpea",
      "Pigeonpea",
      "Groundnut",
      "Potato",
      "Sugarcane",
      "Rapeseed",
      "Sugar Beet",
    ],
    datasets: [
      {
        label: "Yield t/ha",
        data: [
          stringToNumber(info["Maize"]),
          stringToNumber(info["Rice"]),
          stringToNumber(info["Wheat"]),
          stringToNumber(info["Sorghum"]),
          stringToNumber(info["Millet"]),
          stringToNumber(info["Barley"]),
          stringToNumber(info["Soybean"]),
          stringToNumber(info["Green Bean"]),
          stringToNumber(info["Faba Bean"]),
          stringToNumber(info["Pea"]),
          stringToNumber(info["Chickpea"]),
          stringToNumber(info["Cowpea"]),
          stringToNumber(info["Pigeonpea"]),
          stringToNumber(info["Groundnut"]),
          stringToNumber(info["Potato"]),
          stringToNumber(info["Sugarcane"]),
          stringToNumber(info["Rapeseed"]),
          stringToNumber(info["Sugar Beet"]),
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
        text: "Crop Yield",
        color: "white",
      },
      datalabels: {
        color: "white",
        anchor: "end",
        align: "end",
        offset: 5,
        formatter: function (value, context) {
          return;
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
          text: "Crop",
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
          text: "Yield (t/ha)",
          color: "white",
        },
      },
    },
  };

  return (
    <div className="h-full overflow-y-auto">
      <div className="flex flex-col xs:h-[120%] xs:p-2 md:h-1/2 md:p-4">
        {/* rounded removes top left artefact */}
        <div className="h-full">
          <Bar data={barData} options={barOptions} className="rounded-lg" />
        </div>
      </div>

      <div className="h-1/2 gap-3 p-5 xs:flex xs:overflow-x-auto md:grid md:grid-cols-3">
        <div className="flex flex-col justify-between rounded-lg bg-sky-200 xs:h-2/3 md:h-full">
          <div className="rounded-t-lg bg-[#FDD1BA] p-3 xs:w-[300px] md:w-full">
            <h2 className="text-md font-bold underline">
              Agricultural Water Withdrawal
            </h2>
          </div>

          <div className="p-3">
            <h3 className="mb-3 text-sm">
              {isModalLoading ? (
                <ModalLoading />
              ) : info["Agricultural water withdrawal"] ? (
                info["Agricultural water withdrawal"]
              ) : (
                "N/A"
              )}
            </h3>
          </div>
        </div>

        <div className="flex flex-col justify-between rounded-lg bg-sky-200 xs:h-2/3 md:h-full">
          <div className="rounded-t-lg bg-[#FDD1BA] p-3 xs:w-[300px] md:w-full">
            <h2 className="text-md font-bold underline">
              Fertilizer Use per Unit of Land
            </h2>
          </div>

          <div className="p-3">
            <h3 className="mb-3 text-sm">
              {isModalLoading ? (
                <ModalLoading />
              ) : info["Fertilizer use per unit of land"] ? (
                info["Fertilizer use per unit of land"]
              ) : (
                "N/A"
              )}
            </h3>
          </div>
        </div>

        <div className="flex flex-col justify-between rounded-lg bg-sky-200 xs:h-2/3 md:h-full">
          <div className="rounded-t-lg bg-[#FDD1BA] p-3 xs:w-[150px] md:w-full">
            <h2 className="text-md font-bold underline">Crop land</h2>
          </div>

          <div className="p-3">
            <h3 className="mb-3 text-sm">
              {isModalLoading ? (
                <ModalLoading />
              ) : info["Crop land percent"] ? (
                info["Crop land percent"]
              ) : (
                "N/A"
              )}
            </h3>
          </div>
        </div>

        <div className="flex flex-col justify-between rounded-lg bg-sky-200 xs:h-2/3 md:h-full">
          <div className="rounded-t-lg bg-[#FDD1BA] p-3 xs:w-[300px] md:w-full">
            <h2 className="text-md font-bold underline">
              Agriculture Factor Productivity
            </h2>
          </div>

          <div className="p-3">
            <h3 className="mb-3 text-sm">
              {isModalLoading ? (
                <ModalLoading />
              ) : info["Agriculture factor productivity"] ? (
                info["Agriculture factor productivity"]
              ) : (
                "N/A"
              )}
            </h3>
          </div>
        </div>

        <div className="flex flex-col justify-between rounded-lg bg-sky-200 xs:h-2/3 md:h-full">
          <div className="rounded-t-lg bg-[#FDD1BA] p-3 xs:w-[320px] md:w-full">
            <h2 className="text-md font-bold underline">
              Agricultural R&D (USD Million)
            </h2>
          </div>

          <div className="p-3">
            <h3 className="mb-3 text-sm">
              {isModalLoading ? (
                <ModalLoading />
              ) : info["Agricultural R&D in millions USD"] ? (
                info["Agricultural R&D in millions USD"]
              ) : (
                "N/A"
              )}
            </h3>
          </div>
        </div>

        <div className="flex flex-col justify-between rounded-lg bg-sky-200 xs:h-2/3 md:h-full">
          <div className="rounded-t-lg bg-[#FDD1BA] p-3 xs:w-[150px] md:w-full">
            <h2 className="text-md font-bold underline">Soil Erosion</h2>
          </div>

          <div className="p-3">
            <h3 className="mb-3 text-sm">
              {isModalLoading ? (
                <ModalLoading />
              ) : info["Soil erosion"] ? (
                info["Soil erosion"]
              ) : (
                "N/A"
              )}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
