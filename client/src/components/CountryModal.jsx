import React, { useEffect, useRef, useState } from "react";

import { IconX, IconChevronRight, IconChevronLeft } from "@tabler/icons-react";

import Tab from "./Tab";
import TabContent from "./TabContent";
import Benchmark from "./Benchmark";
import FoodAgriculture from "./FoodAgriculture";
import Healthcare from "./Healthcare";

export default function CountryModal({
  visible,
  onClose,
  info,
  isModalLoading,
}) {
  if (!visible) return null;

  const [currentTab, setCurrentTab] = useState("Benchmark");

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
      className="fixed inset-0 z-[100] flex h-full items-center justify-center bg-black bg-opacity-30"
      onClick={handleClickClose}
      id="modal_container"
    >
      <div className="h-5/6 w-5/6 rounded-lg bg-white p-0">
        {/* top image */}

        <div
          style={{ "--image-url": `url(${info["Image URL"]})` }}
          className={`h-1/5 w-full rounded-t-lg bg-[image:var(--image-url)] bg-cover bg-[center_bottom_400px]`}
        >
          <div className={`h-full rounded-t-lg bg-[rgba(0,0,0,0.5)] lg:flex`}>
            <div className="text-xs text-white xs:h-1/3 lg:h-full lg:w-1/3">
              <p className="p-1 text-gray-400">Information Updated: 2024</p>
            </div>

            <div className="flex flex-col items-center justify-center space-y-2 xs:h-1/3 lg:h-full lg:w-1/3">
              <h1 className="text-5xl font-bold text-white">{info.Country}</h1>
              {/* <button className="my-5 rounded-lg border border-red-600 bg-red-600 px-3 py-2 font-bold text-white shadow-sm hover:bg-transparent hover:text-red-600">
                Favourite
              </button> */}
            </div>

            <div className="flex flex-col items-end justify-end p-1 xs:h-1/3 lg:h-full lg:w-1/3">
              <div className="flex space-x-1">
                <p className="text-white">Photo</p>
                <p className="text-gray-400">By</p>
                <p className="text-white">{info["Image author"]}</p>
                <p className="text-gray-400">via</p>
                <p className="text-white">Unsplash</p>
              </div>
            </div>
          </div>
        </div>

        {/* tabs */}
        <div className="flex h-[7%] w-full border-b-2 shadow-sm">
          <div className="flex justify-center bg-gray-100 hover:bg-gray-300">
            <button
              className="flex w-10 items-center justify-center"
              onClick={() => scrollTabs("left")}
            >
              <IconChevronLeft stroke={3} />
            </button>
          </div>
          <div
            className="scrollbar-none flex overflow-x-auto [&>*]:flex-shrink-0 [&>*]:p-5"
            ref={tabsContainerRef}
          >
            <Tab
              name={"Benchmark"}
              currentTab={currentTab}
              setCurrentTab={setCurrentTab}
              disabled={isModalLoading}
            />
            <Tab
              name={"Food and Agriculture"}
              currentTab={currentTab}
              setCurrentTab={setCurrentTab}
              disabled={isModalLoading}
            />
            <Tab
              name={"Healthcare"}
              currentTab={currentTab}
              setCurrentTab={setCurrentTab}
              disabled={isModalLoading}
            />
            <Tab
              name={"Water"}
              currentTab={currentTab}
              setCurrentTab={setCurrentTab}
              disabled={isModalLoading}
            />
            <Tab
              name={"Energy"}
              currentTab={currentTab}
              setCurrentTab={setCurrentTab}
              disabled={isModalLoading}
            />
            <Tab
              name={"Affordable Housing"}
              currentTab={currentTab}
              setCurrentTab={setCurrentTab}
              disabled={isModalLoading}
            />
            <Tab
              name={"Environment"}
              currentTab={currentTab}
              setCurrentTab={setCurrentTab}
              disabled={isModalLoading}
            />
            <Tab
              name={"Economic Prosperity"}
              currentTab={currentTab}
              setCurrentTab={setCurrentTab}
              disabled={isModalLoading}
            />
          </div>

          <div className="flex justify-center bg-gray-100 hover:bg-gray-300">
            <button
              className="flex w-10 items-center justify-center"
              onClick={() => scrollTabs("right")}
            >
              <IconChevronRight stroke={3} />
            </button>
          </div>
        </div>

        <button className="absolute right-8 top-10" onClick={onClose}>
          <IconX color="white" size={40} />
        </button>

        {/* tab content */}
        <div className="h-[73%] rounded-b-lg bg-black">
          {currentTab === "Benchmark" ? (
            <Benchmark info={info} isModalLoading={isModalLoading} />
          ) : currentTab === "Food and Agriculture" ? (
            <FoodAgriculture info={info} />
          ) : currentTab === "Healthcare" ? (
            <Healthcare info={info} />
          ) : (
            <TabContent />
          )}
        </div>
      </div>
    </div>
  );
}
