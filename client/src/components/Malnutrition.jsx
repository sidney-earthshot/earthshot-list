import React, { useState, useEffect } from "react";
import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";
Chart.register(ChartDataLabels);
import { Pie, Doughnut, Bar } from "react-chartjs-2";

export default function Malnutrition({ info }) {
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
    if (string === "") {
      return "N/A";
    }

    // Remove the percentage sign and convert to a floating-point number
    const number = parseFloat(string.replace("%", ""));
    return number;
  }

  const barData1 = {
    labels: [
      "Prevalence of Undernourishment",
      "Prevalence of Stunting",
      "Prevalence of Wasting",
      "Underweight",
    ],
    datasets: [
      {
        label: "Prevalence",
        data: [
          percentToNumber(info["Prevalence of undernourishment"]),
          info["Prevalence of stunting"],
          info["Prevalence of wasting"],
          percentToNumber(info["Underweight"]),
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
        display: true,
        labels: {
          color: "white",
        },
      },
      title: {
        display: true,
        text: "Malnutrition Prevalence",
        color: "white",
      },
      datalabels: {
        color: "white",
        anchor: "center",
        align: "end",
        offset: 5,
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
          text: "Type of Malnutrition",
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
          text: "Prevalence",
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
            <h2 className="font-bold underline xs:text-sm md:text-lg">
              Severe food insecurity
            </h2>
          </div>

          <div className="p-3">
            <h3 className="mb-3 text-sm">
              {info["Severe food insecurity"]
                ? info["Severe food insecurity"]
                : "N/A"}
            </h3>
          </div>
        </div>

        <div className="flex flex-col justify-between rounded-lg bg-sky-200">
          <div className="rounded-t-lg bg-[#FDD1BA] p-3 xs:w-[250px] md:w-full">
            <h2 className="font-bold underline xs:text-sm md:text-lg">
              Micro/Macro Nutrient Deficiency
            </h2>
          </div>

          <div className="p-3">
            <h3 className="mb-3 text-sm">
              {info["Micro/macro nutrient deficiency"]
                ? info["Micro/macro nutrient deficiency"]
                : "N/A"}
            </h3>
          </div>
        </div>

        <div className="flex flex-col justify-between rounded-lg bg-sky-200">
          <div className="rounded-t-lg bg-[#FDD1BA] p-3 xs:w-[210px] md:w-full">
            <h2 className="font-bold underline xs:text-sm md:text-lg">
              Global Hunger Index Score
            </h2>
          </div>

          <div className="p-3">
            <h3 className="mb-3 text-sm">
              {info["Global Hunger Index Score"]
                ? info["Global Hunger Index Score"]
                : "N/A"}
            </h3>
          </div>
        </div>
      </div>

      <div className="mt-12 flex h-3/5 justify-center">
        <Bar data={barData1} options={barOptions1} className="rounded-xl" />
      </div>
    </div>
  );
}
