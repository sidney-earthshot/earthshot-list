import React, { useState, useEffect } from "react";
import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";
Chart.register(ChartDataLabels);
import { Pie, Doughnut, Bar } from "react-chartjs-2";

export default function AccessHealthcare({ info }) {
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
    labels: ["Physicians", "Hospital Beds"],
    datasets: [
      {
        label: "Number",
        data: [
          stringToNumber(info["Number of primary care physicians per 1000"]),
          stringToNumber(info["Number of hospital beds per 1000"]),
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
        text: "Hospital Personnell/Item per 1000 People",
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
          text: "Personnel/Item",
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
              Share of the Population with Health insurance
            </h2>
          </div>

          <div className="p-3">
            <h3 className="mb-3 text-sm">
              {info["Percent of population with health insurance"]
                ? info["Percent of population with health insurance"]
                : "N/A"}
            </h3>
          </div>
        </div>

        <div className="flex flex-col justify-between rounded-lg bg-sky-200 xs:h-2/3 md:h-full">
          <div className="rounded-t-lg bg-[#FDD1BA] p-3 xs:w-[300px] md:w-full">
            <h2 className="text-md font-bold underline">
              Patient Travel time to Healthcare Facility with Motor Vehicle
            </h2>
          </div>

          <div className="p-3">
            <h3 className="mb-3 text-sm">
              {info[
                "Patient travel time to healthcare facility with motorized vehicle"
              ]
                ? info[
                    "Patient travel time to healthcare facility with motorized vehicle"
                  ]
                : "N/A"}
            </h3>
          </div>
        </div>

        <div className="flex flex-col justify-between rounded-lg bg-sky-200 xs:h-2/3 md:h-full">
          <div className="rounded-t-lg bg-[#FDD1BA] p-3 xs:w-[150px] md:w-full">
            <h2 className="text-md font-bold underline">
              Patient Travel time to Healthcare Facility without Motor Vehicle
            </h2>
          </div>

          <div className="p-3">
            <h3 className="mb-3 text-sm">
              {info[
                "Patient travel time to healthcare facility without motorized vehicle"
              ]
                ? info[
                    "Patient travel time to healthcare facility without motorized vehicle"
                  ]
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
