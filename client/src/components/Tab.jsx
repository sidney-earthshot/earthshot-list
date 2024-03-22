import React from "react";

export default function Tab({ name, currentTab, setCurrentTab, disabled }) {
  return (
    <button
      className={`hover:border-b-2 hover:border-b-red-600 hover:bg-gray-50 hover:text-red-600 ${
        currentTab === name ? `border-b-2 border-b-red-600 text-red-600` : ""
      } ${disabled ? "cursor-not-allowed text-gray-400 animate-pulse" : "text-black"}`}
      onClick={() => {
        setCurrentTab(name);
      }}
      disabled={disabled}
    >
      {name}
    </button>
  );
}
