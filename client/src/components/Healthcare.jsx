import { useState } from "react";
import React from "react";

const subCategories = [
  "Supply",
  "Food Waste per Capita",
  "Productivity",
  "Food Spoilage",
  "Cost of Food",
  "Current Expenditure",
  "Nutrient Deficiency Prevalency",
  "Malnutrition",
];

export default function Healthcare() {
  const [currentSubTab, setCurrentSubTab] = useState("Supply");

  return (
    <div className="flex h-[815px]">
      {/* left */}
      <div className="flex w-1/6 flex-col overflow-y-auto bg-gray-400">
        {subCategories.map((subCategory) => {
          return (
            <button
              key={subCategory}
              className={`border-b-2 px-2 py-4 text-lg font-bold ${currentSubTab === subCategory ? "border-l-4 border-l-gray-800 bg-gray-600 text-red-600 transition ease-in-out" : "border-r-2 text-white hover:bg-gray-300"}`}
              onClick={() => {
                setCurrentSubTab(subCategory);
              }}
            >
              {subCategory}
            </button>
          );
        })}
      </div>

      {/* right */}
      <div className="w-5/6 bg-gray-600">
        right
      </div>
    </div>
  );
}
