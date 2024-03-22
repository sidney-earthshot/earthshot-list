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
    ],
    datasets: [
      {
        label: "Percentage",
        data: [
          stringToNumber(info["Infant Mortality Rate"]),
          stringToNumber(info["Maternal Mortality Rate"]),
          stringToNumber(info["Under 5 Mortality Rate"]),
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
        text: "Vaccination Coverage",
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
          text: "Disease",
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
          text: "Number",
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
              Healthcare Spending per Capita (USD)
            </h2>
          </div>

          <div className="p-3">
            <h3 className="mb-3 text-sm">
              {info["Healthcare spending per capita"]
                ? `$${Math.round(info["Healthcare spending per capita"] * 100) / 100}`
                : "N/A"}
            </h3>
          </div>
        </div>

        <div className="flex flex-col justify-between rounded-lg bg-sky-200 xs:h-2/3 md:h-full">
          <div className="rounded-t-lg bg-[#FDD1BA] p-3 xs:w-[300px] md:w-full">
            <h2 className="text-md font-bold underline">
              Cost Effectiveness Analysis Index
            </h2>
          </div>

          <div className="p-3">
            <h3 className="mb-3 text-sm">
              {info["Cost effectiveness analysis index"]
                ? info["Cost effectiveness analysis index"]
                : "N/A"}
            </h3>
          </div>
        </div>

        <div className="flex flex-col justify-between rounded-lg bg-sky-200 xs:h-2/3 md:h-full">
          <div className="rounded-t-lg bg-[#FDD1BA] p-3 xs:w-[150px] md:w-full">
            <h2 className="text-md font-bold underline">Life Expectancy</h2>
          </div>

          <div className="p-3">
            <h3 className="mb-3 text-sm">
              {info["Life expectancy in years"]
                ? `${Math.round(info["Life expectancy in years"])} years`
                : "N/A"}
            </h3>
          </div>
        </div>

        <div className="flex flex-col justify-between rounded-lg bg-sky-200 xs:h-2/3 md:h-full">
          <div className="rounded-t-lg bg-[#FDD1BA] p-3 xs:w-[300px] md:w-full">
            <h2 className="text-md font-bold underline">
              Burden of Disease (DALY) per 100 000 People
            </h2>
          </div>

          <div className="p-3">
            <h3 className="mb-3 text-sm">
              {info["Burden of Disease in DALY per 100,000"]
                ? info["Burden of Disease in DALY per 100,000"]
                : "N/A"}
            </h3>
          </div>
        </div>

        <div className="flex flex-col justify-between rounded-lg bg-sky-200 xs:h-2/3 md:h-full">
          <div className="rounded-t-lg bg-[#FDD1BA] p-3 xs:w-[320px] md:w-full">
            <h2 className="text-md font-bold underline">
              Prescription Drug Utilization
            </h2>
          </div>

          <div className="p-3">
            <h3 className="mb-3 text-sm">
              {info["Prescription drug utilization"]
                ? info["Prescription drug utilization"]
                : "N/A"}
            </h3>
          </div>
        </div>

        <div className="flex flex-col justify-between rounded-lg bg-sky-200 xs:h-2/3 md:h-full">
          <div className="rounded-t-lg bg-[#FDD1BA] p-3 xs:w-[150px] md:w-full">
            <h2 className="text-md font-bold underline">
              Patient Satisfaction Rate
            </h2>
          </div>

          <div className="p-3">
            <h3 className="mb-3 text-sm">
              {info["Patient satisfaction rate"]
                ? info["Patient satisfaction rate"]
                : "N/A"}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
