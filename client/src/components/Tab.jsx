import React from "react";

export default function Tab({ name, currentTab, setCurrentTab }) {
  return (
    <button
      className={`hover:text-red-600 hover:border-b-2 hover:border-b-red-600 hover:bg-gray-50 ${
        currentTab === name ? `text-red-600 border-b-2 border-b-red-600` : ""
      }`}
      onClick={() => {
        setCurrentTab(name);
      }}
    >
      {name}
    </button>
  );
}
