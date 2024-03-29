import React from "react";

import ModalLoading from "./ModalLoading";

export default function Benchmark({ info, isModalLoading }) {
  return (
    <div className="h-full">
      {/* top */}
      <div className="rounded-b-lg bg-gray-600 px-4 xs:h-3/5 md:h-4/6">
        <h1 className="mx-4 rounded-b-lg border-b-4 p-4 text-3xl font-bold text-white">
          <p className="">Benchmark Stats</p>
        </h1>

        <div className="m-4 gap-x-2 gap-y-3 overflow-x-auto p-3 xs:flex md:grid md:grid-flow-col md:grid-rows-3">
          <div className="flex flex-col justify-between rounded-lg bg-sky-200 xs:h-2/3 md:h-full">
            <div className="rounded-t-lg bg-[#FDD1BA] p-3 xs:w-[250px] md:w-full">
              <h2 className="text-lg font-bold underline">
                Income Classification
              </h2>
            </div>

            <div className="p-3">
              <h3 className="text-sm">
                {isModalLoading ? (
                  <ModalLoading />
                ) : info["Income classification"] ===
                  "[HIC's] High-income economies (GNI $13205 or more)" ? (
                  "High-Income Economies"
                ) : info["Income classification"] ===
                  "[UMIC's] Upper-middle-income economies (GNI $4256 to $13205)" ? (
                  "Upper-Middle-Income Economies"
                ) : info["Income classification"] ===
                  "[LMIC's] Lower-middle-income economies (GNI $1086 to $4255)" ? (
                  "Lower-Middle-Income Economies"
                ) : info["Income classification"] ===
                  "[LIC's] Low-income economies (GNI $1085 or less)" ? (
                  "Low-Income Economies"
                ) : (
                  "N/A"
                )}
              </h3>
              <h3 className="text-sm">
                {isModalLoading ? (
                  <ModalLoading />
                ) : info["Income classification"] ===
                  "[HIC's] High-income economies (GNI $13205 or more)" ? (
                  "(GNI $13205 or more)"
                ) : info["Income classification"] ===
                  "[UMIC's] Upper-middle-income economies (GNI $4256 to $13205)" ? (
                  "(GNI $4256 to $13205)"
                ) : info["Income classification"] ===
                  "[LMIC's] Lower-middle-income economies (GNI $1086 to $4255)" ? (
                  "(GNI $1086 to $4255)"
                ) : info["Income classification"] ===
                  "[LIC's] Low-income economies (GNI $1085 or less)" ? (
                  "(GNI $1085 or less)"
                ) : (
                  "N/A"
                )}
              </h3>
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-lg bg-sky-200 xs:h-2/3 md:h-full">
            <div className="rounded-t-lg bg-[#FDD1BA] p-3 xs:w-[170px] md:w-full">
              <h2 className="text-lg font-bold underline">Region</h2>
            </div>

            <div className="p-3">
              <h3 className="mb-3 text-sm">
                {isModalLoading ? <ModalLoading /> : info["Region"]}
              </h3>
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-lg bg-sky-200 xs:h-2/3 md:h-full">
            <div className="rounded-t-lg bg-[#FDD1BA] p-3 xs:w-[200px] md:w-full">
              <h2 className="text-lg font-bold underline">2021 Population</h2>
            </div>

            <div className="p-3">
              <h3 className="mb-3 text-sm">
                {isModalLoading ? (
                  <ModalLoading />
                ) : info["2021 population"] ? (
                  info["2021 population"].toLocaleString()
                ) : (
                  "N/A"
                )}
              </h3>
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-lg bg-sky-200 xs:h-2/3 md:h-full">
            <div className="rounded-t-lg bg-[#FDD1BA] p-3 xs:w-[240px] md:w-full">
              <h2 className="text-lg font-bold underline">
                GNI per Capita(Atlas)
              </h2>
            </div>

            <div className="p-3">
              <h3 className="mb-3 text-sm">
                {isModalLoading ? (
                  <ModalLoading />
                ) : info["GNI Atlas"] ? (
                  new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(info["GNI Atlas"]) + " USD"
                ) : (
                  "N/A"
                )}
              </h3>
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-lg bg-sky-200 xs:h-2/3 md:h-full">
            <div className="rounded-t-lg bg-[#FDD1BA] p-3 xs:w-[230px] md:w-full">
              <h2 className="text-lg font-bold underline">
                GNI per Capita(PPP)
              </h2>
            </div>

            <div className="p-3">
              <h3 className="mb-3 text-sm">
                {isModalLoading ? (
                  <ModalLoading />
                ) : info["GNI PPP"] ? (
                  new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(info["GNI PPP"]) + " USD"
                ) : (
                  "N/A"
                )}
              </h3>
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-lg bg-sky-200 xs:h-2/3 md:h-full">
            <div className="rounded-t-lg bg-[#FDD1BA] p-3 xs:w-[100px] md:w-full">
              <h2 className="text-lg font-bold underline">UN LDC</h2>
            </div>

            <div className="p-3">
              <h3 className="mb-3 text-sm">
                {isModalLoading ? (
                  <ModalLoading />
                ) : info["LDC"] === true ? (
                  "Yes"
                ) : (
                  "No"
                )}
              </h3>
            </div>
          </div>

          {/* urban stats */}
          <div className="row-span-3 grid grid-rows-subgrid rounded-lg bg-sky-200 shadow-md">
            <div className="flex flex-col justify-between xs:w-[200px] md:w-full">
              <h2 className="rounded-t-lg bg-[#FDD1BA] p-3 text-lg font-bold underline">
                Urban Stats
              </h2>
              <div className="px-3">
                <h2 className="font-medium underline">Population</h2>
                <h3 className="">
                  {isModalLoading ? (
                    <ModalLoading />
                  ) : info["Urban population"] ? (
                    info["Urban population"]
                  ) : (
                    "N/A"
                  )}
                </h3>
              </div>
            </div>

            <div className="px-3 md:mt-12">
              <h2 className="font-medium underline">Electricity Access</h2>
              <h3 className="">
                {isModalLoading ? (
                  <ModalLoading />
                ) : info["Urban electricity access"] ? (
                  `${Math.round(info["Urban electricity access"])}%`
                ) : (
                  "N/A"
                )}
              </h3>
            </div>

            <div className="px-3 md:mt-6">
              <h2 className="font-medium underline">Internet Connectivity</h2>
              <h3 className="">
                {isModalLoading ? (
                  <ModalLoading />
                ) : info["Urban internet connectivity"] ? (
                  `${Math.round(info["Urban internet connectivity"])}%`
                ) : (
                  "N/A"
                )}
              </h3>
            </div>
          </div>

          {/* rural stats */}
          <div className="row-span-3 grid grid-rows-subgrid rounded-lg bg-sky-200 shadow-md">
            <div className="flex flex-col justify-between xs:w-[200px] md:w-full">
              <h2 className="rounded-t-lg bg-[#FDD1BA] p-3 text-lg font-bold underline">
                Rural Stats
              </h2>
              <div className="px-3">
                <h2 className="font-medium underline">Population</h2>
                <h3 className="">
                  {isModalLoading ? (
                    <ModalLoading />
                  ) : info["Rural population"] ? (
                    info["Rural population"]
                  ) : (
                    "N/A"
                  )}
                </h3>
              </div>
            </div>

            <div className="px-3 md:mt-12">
              <h2 className="font-medium underline">Electricity Access</h2>
              <h3 className="">
                {isModalLoading ? (
                  <ModalLoading />
                ) : info["Rural electricity access"] ? (
                  `${Math.round(info["Rural electricity access"])}%`
                ) : (
                  "N/A"
                )}
              </h3>
            </div>

            <div className="px-3 md:mt-6">
              <h2 className="font-medium underline">Internet Connectivity</h2>
              <h3 className="">
                {isModalLoading ? (
                  <ModalLoading />
                ) : info["Rural internet connectivity"] ? (
                  `${Math.round(info["Rural internet connectivity"])}%`
                ) : (
                  "N/A"
                )}
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* bottom */}
      <div className="flex justify-center rounded-b-lg bg-gray-600 xs:h-2/5 md:h-2/6">
        {isModalLoading ? (
          <div className="h-32 w-32 mt-6 animate-spin rounded-full border-b-4 border-t-4 border-blue-500"></div>
        ) : (
          <iframe
            src={info["Map URL"]}
            width="800"
            height="500"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full w-full rounded-b-lg"
          ></iframe>
        )}
      </div>
    </div>
  );
}
