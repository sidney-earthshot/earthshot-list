import React, { useState, useEffect } from "react";
import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";
Chart.register(ChartDataLabels);
import { Pie, Doughnut, Bar } from "react-chartjs-2";

export default function IndicatorsHealth({ info }) {
  const [indexAxis, setIndexAxis] = useState("x");

  function stringToNumber(string) {
    if (string) {
      const match = string.match(/[+-]?([0-9]*[.])?[0-9]+/); // Regular expression to match a floating point number
      return match ? parseFloat(match[0]) : NaN; // Parse the matched string as a float, or return NaN if no match
    } else {
      return "N/A";
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
      "Tuberculosis (BCG)",
      "Hep B (HepB3)",
      "H.influenza type b(Hib3)",
      "Inactivated Polio (IPV)",
      "Measles First Dose (MCV1)",
      "Pneumococcal (PCV3)",
      "Polio (Pol3)",
      "Rubella (RCV1)",
      "Rotavirus (RotaC)",
      "Yellow Fever)",
      "Diptheria/Tetanus/Pertussis (DTP3)",
    ],
    datasets: [
      {
        label: "Percentage",
        data: [
          stringToNumber(info["Vaccination Coverage Tuberculosis (BCG)"]),
          stringToNumber(info["Vaccination Coverage Hep B (HepB3)"]),
          stringToNumber(
            info["Vaccination Coverage H"]["influenza type b (Hib3)"]
          ),
          stringToNumber(info["Vaccination Coverage Inactivated polio (IPV)"]),
          stringToNumber(
            info["Vaccination Coverage Measles first dose (MCV1)"]
          ),
          stringToNumber(info["Vaccination Coverage Pneumococcal (PCV3)"]),
          stringToNumber(info["Vaccination Coverage Polio (Pol3)"]),
          stringToNumber(info["Vaccination Coverage Rubella (RCV1)"]),
          stringToNumber(info["Vaccination Coverage Rotavirus (RotaC)"]),
          stringToNumber(info["Vaccination Coverage Yellow fever (YFV)"]),
          stringToNumber(
            info["Vaccination Coverage Diptheria tetanus pertussis (DTP3)"]
          ),
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
              Wait Times to See Physicians
            </h2>
          </div>

          <div className="p-3">
            <h3 className="mb-3 text-sm">
              {info["Wait times to see primary care physicians"]
                ? info["Wait times to see primary care physicians"]
                : "N/A"}
            </h3>
          </div>
        </div>

        <div className="flex flex-col justify-between rounded-lg bg-sky-200 xs:h-2/3 md:h-full">
          <div className="rounded-t-lg bg-[#FDD1BA] p-3 xs:w-[320px] md:w-full">
            <h2 className="text-md font-bold underline">
              Wait Times to See Specialist
            </h2>
          </div>

          <div className="p-3">
            <h3 className="mb-3 text-sm">
              {info["Wait times to see specialists"]
                ? info["Wait times to see specialists"]
                : "N/A"}
            </h3>
          </div>
        </div>

        <div className="flex flex-col justify-between rounded-lg bg-sky-200 xs:h-2/3 md:h-full">
          <div className="rounded-t-lg bg-[#FDD1BA] p-3 xs:w-[150px] md:w-full">
            <h2 className="text-md font-bold underline">
              Wait Times for Elective Surgery
            </h2>
          </div>

          <div className="p-3">
            <h3 className="mb-3 text-sm">
              {info["Wait times for elective surgery"]
                ? info["Wait times for elective surgery"]
                : "N/A"}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
