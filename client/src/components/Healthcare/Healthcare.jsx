import { useState } from "react";
import React from "react";

import { IconCaretDownFilled, IconCaretUpFilled } from "@tabler/icons-react";

import AccessHealthcare from "./AccessHealthcare";
import IndicatorsHealth from "./IndicatorsHealth";
import QualityHealth from "./QualityHealth";
import DeathRateConditions from "./DeathRateConditions";

const subCategories = [
  "Access to Healthcare",
  "Indicators of Health",
  "Quality of Health",
  "Death Rate of Conditions",
];

export default function Healthcare({ info }) {
  const [currentSubTab, setCurrentSubTab] = useState("Access to Healthcare");
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  return (
    <div className="flex h-full flex-col md:flex-row">
      {/* desktop subtabs */}
      <div className="hidden w-1/6 flex-col overflow-y-auto rounded-bl-lg bg-gray-400 md:flex">
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

      {/* mobile dropdown */}
      <div className="md:hidden">
        <button
          className="flex w-full bg-gray-400 px-4 py-2 text-white hover:cursor-pointer hover:bg-gray-300"
          onClick={() => setIsDropDownOpen(!isDropDownOpen)}
        >
          {currentSubTab}
          {isDropDownOpen ? <IconCaretUpFilled /> : <IconCaretDownFilled />}
        </button>
        {isDropDownOpen && (
          <div className=" absolute bg-gray-400">
            {subCategories.map((subCategory) => (
              <button
                key={subCategory}
                className={`flex w-32 px-2 py-4 text-left text-lg font-bold ${currentSubTab === subCategory ? "bg-gray-600 text-red-600" : "text-white hover:bg-gray-300"}`}
                onClick={() => {
                  setCurrentSubTab(subCategory);
                  setIsDropDownOpen(false);
                }}
              >
                {subCategory}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* content */}
      <div className="h-full w-full bg-gray-600 xs:rounded-b-lg md:w-5/6 md:rounded-br-lg">
        {currentSubTab === "Access to Healthcare" ? (
          <AccessHealthcare info={info} />
        ) : currentSubTab === "Indicators of Health" ? (
          <IndicatorsHealth info={info} />
        ) : currentSubTab === "Quality of Health" ? (
          <QualityHealth info={info} />
        ) : currentSubTab === "Death Rate of Conditions" ? (
          <DeathRateConditions info={info} />
        ) : (
          <p>Error! Please Refresh</p>
        )}
      </div>
    </div>
  );
}
