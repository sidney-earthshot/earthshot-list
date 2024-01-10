import React, { useRef, useState } from "react";

import {
  IconCaretDownFilled,
  IconPlus,
  IconTorii,
  IconWifi,
  IconSun,
  IconHeart,
  IconX,
  IconStarFilled,
  IconCash,
  IconSatellite,
  IconThumbUpFilled,
  IconShieldFilled,
  IconChevronRight,
  IconChevronLeft,
} from "@tabler/icons-react";

import Tab from "./Tab";

export default function CountryModal({ visible, onClose }) {
  if (!visible) return null;

  const [currentTab, setCurrentTab] = useState("Scores");

  const tabsContainerRef = useRef(null);

  const handleClickClose = (e) => {
    if (e.target.id === "modal_container") {
      onClose();
    }
  };

  const scrollTabs = (direction) => {
    if (tabsContainerRef.current) {
      const scrollAmount = 200;
      const currentScroll = tabsContainerRef.current.scrollLeft;

      tabsContainerRef.current.scrollTo({
        left:
          direction === "left"
            ? currentScroll - scrollAmount
            : currentScroll + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-[100]"
      onClick={handleClickClose}
      id="modal_container"
    >
      <div className="bg-white p-0 rounded-lg w-5/6 h-[1100px]">
        <div
          className={`bg-[url('https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=2388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-[center_bottom_500px] w-full h-1/5 rounded-t-lg`}
        >
          <div
            className={`bg-black rounded-t-lg h-full flex justify-between bg-[rgba(0,0,0,0.5)]`}
          >
            <div className="text-white text-xs flex items-end">
              <p className="text-gray-400">
                Cost of Living {">>"} Asia {">>"} Thailand {">>"} Bangkok
              </p>
            </div>
            <div className=" flex flex-col items-center justify-center space-y-2">
              <h1 className="text-white font-bold text-5xl">Bangkok</h1>
              <p className="text-white">Thailand</p>
              <button className="text-white font-bold border border-red-600 rounded-lg shadow-sm px-3 py-2 my-5 bg-red-600 hover:text-red-600 hover:bg-transparent">
                Favourite
              </button>
            </div>
            <div className="flex flex-col justify-end items-end">
              <p className="text-gray-400">5/5</p>
              <p className="text-gray-400">3099 reviews</p>
              <div className="flex space-x-1">
                <p className="text-white">Photo</p>
                <p className="text-gray-400">By</p>
                <p className="text-white">Jezael Melgoza</p>
                <p className="text-gray-400">via</p>
                <p className="text-white">Unsplash</p>
              </div>
            </div>
          </div>
        </div>

        {/* tabs */}
        <div className="w-full flex h-[60px] shadow-sm border-b-2">
          <div className="flex justify-center bg-gray-100">
            <button
              className="w-10 flex items-center justify-center"
              onClick={() => scrollTabs("left")}
            >
              <IconChevronLeft stroke={3} />
            </button>
          </div>
          <div
            className="flex overflow-x-auto [&>*]:p-5 [&>*]:flex-shrink-0"
            ref={tabsContainerRef}
          >
            <Tab name={"Score"} />
            <Tab name={"Digital Nomad Guide"} />
            <Tab name={"People"} />
            <Tab name={"Cost of Living"} />
            <Tab name={"Pros and Cons"} />
            <Tab name={"Photos"} />
            <Tab name={"Reviews"} />
            <Tab name={"Weather"} />
            <Tab name={"Extra Tab"} />
            <Tab name={"Extra Tab"} />
            <Tab name={"Extra Tab"} />
            <Tab name={"Extra Tab"} />
          </div>

          <div className="flex justify-center bg-gray-100">
            <button
              className="w-10 flex items-center justify-center"
              onClick={() => scrollTabs("right")}
            >
              <IconChevronRight stroke={3} />
            </button>
          </div>
        </div>
      </div>

      <button className="absolute right-8 top-10" onClick={onClose}>
        <IconX color="white" size={40} />
      </button>
    </div>
  );
}
