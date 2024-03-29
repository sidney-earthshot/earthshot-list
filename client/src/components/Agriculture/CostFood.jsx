import React, { useState, useEffect } from "react";
import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";
Chart.register(ChartDataLabels);
import { Pie, Doughnut, Bar } from "react-chartjs-2";

export default function CostFood({ info }) {
  const [indexAxis, setIndexAxis] = useState("x");

  // function currencyToNumber(string) {
  //   if (string) {
  //     // Remove the dollar sign and commas, then convert to a floating-point number
  //     const number = parseFloat(string.replace(/[\$,]/g, ""));
  //     return number;
  //   } else {
  //     return "N/A";
  //   }
  // }

  // function percentToNumber(string) {
  //   if (string) {
  //     // Remove the percentage sign and convert to a floating-point number
  //     const number = parseFloat(string.replace("%", ""));
  //     return number;
  //   } else {
  //     return "N/A";
  //   }
  // }

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

  const barData1 = {
    labels: ["Food Expenditure", "Consumer Expenditure"],
    datasets: [
      {
        label: "USD",
        data: [
          stringToNumber(info["Food expenditure in $"]),
          stringToNumber(info["Consumer expenditure"]),
        ],
        backgroundColor: ["rgba(255, 99, 132, 1)"],
      },
    ],
  };

  const barData2 = {
    labels: [
      "% of Average Income (CoNA)",
      "% of Average Income (CoCA)",
      "Food percentage of Consumer Expenditure",
    ],
    datasets: [
      {
        label: "Amount",
        data: [
          stringToNumber(info["Percent of average income (CoNA)"]),
          stringToNumber(info["Percent of average income (CoCA)"]),
          stringToNumber(info["Food percent of consumer expenditure"]),
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
        text: "Expenditure in $USD",
        color: "white",
      },
      datalabels: {
        color: "white",
        anchor: "end",
        align: "end",
        offset: 10,
        formatter: function (value) {
          return `$${value}`;
        },
      },
      tooltip: {
        callbacks: {
          label: (item) => `${item.dataset.label}: $${item.formattedValue}`,
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
          text: "$ in USD",
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
          text: "Cost Type",
          color: "white",
        },
      },
    },
  };

  const barOptions2 = {
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
        text: "Food-Income Cost",
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
          text: "Related Cost",
          color: "white",
        },
        max: 21,
      },
      y: {
        ticks: {
          color: "white", // Y-axis labels (ticks)
          font: {
            size: 10,
          },
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)", // Y-axis lines
          borderColor: "white", // Y-axis border
        },
        title: {
          display: true,
          text: "",
          color: "white",
        },
      },
    },
  };

  return (
    <div className="flex h-full w-full flex-col xs:p-2 md:p-6">
      {/* grid */}
      <div className="h-1/4 gap-3 overflow-y-auto p-4 xs:flex md:grid md:grid-cols-3">
        <div className="flex flex-col justify-between rounded-lg bg-sky-200">
          <div className="rounded-t-lg bg-[#FDD1BA] p-3 xs:w-[270px] md:w-full">
            <h2 className="font-bold underline xs:text-sm md:text-lg">
              Cost of Nutrient Adequacy (CoNA)
            </h2>
          </div>

          <div className="p-3">
            <h3 className="mb-3 text-sm">
              {info["Cost of Nutrient Adequacy"]
                ? info["Cost of Nutrient Adequacy"]
                : "N/A"}
            </h3>
          </div>
        </div>

        <div className="flex flex-col justify-between rounded-lg bg-sky-200">
          <div className="rounded-t-lg bg-[#FDD1BA] p-3 xs:w-[270px] md:w-full">
            <h2 className="font-bold underline xs:text-sm md:text-lg">
              Cost of Caloric Adequacy (CoCA)
            </h2>
          </div>

          <div className="p-3">
            <h3 className="mb-3 text-sm">
              {info["Cost of Caloric Adequacy"]
                ? info["Cost of Caloric Adequacy"]
                : "N/A"}
            </h3>
          </div>
        </div>

        <div className="flex flex-col justify-between rounded-lg bg-sky-200">
          <div className="rounded-t-lg bg-[#FDD1BA] p-3 xs:w-[230px] md:w-full">
            <h2 className="font-bold underline xs:text-sm md:text-lg">
              Premium of CoNA vs. CoCA
            </h2>
          </div>

          <div className="p-3">
            <h3 className="mb-3 text-sm">
              {info["Premium of CoNA vs CoCA"]
                ? info["Premium of CoNA vs CoCA"]
                : "N/A"}
            </h3>
          </div>
        </div>
      </div>

      <div className="h-3/4">
        <div className="h-1/2">
          <Bar data={barData1} options={barOptions1} className="rounded-xl" />
        </div>
        <div className="h-1/2">
          <Bar data={barData2} options={barOptions2} className="rounded-xl" />
        </div>
      </div>
    </div>
  );
}
