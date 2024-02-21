import React from "react";

import {
  IconStarFilled,
  IconThumbUpFilled,
  IconHeartFilled,
} from "@tabler/icons-react";

export default function Benchmark({ info }) {
  return (
    <div className="h-full">
      {/* top */}
      <div className="rounded-b-lg bg-gray-600 px-4 xs:h-3/5 md:h-4/6">
        <h1 className="mx-4 rounded-b-lg border-b-4 p-4 text-3xl font-bold text-white">
          <p className="">Benchmark Stats</p>
        </h1>

        <div className="m-4 gap-x-2 gap-y-3 overflow-x-auto p-3 xs:flex md:grid md:grid-flow-col md:grid-rows-3">
          <div className="flex flex-col justify-between rounded-lg bg-sky-200 xs:h-2/3 md:h-full">
            <div className="rounded-t-lg bg-red-100 p-3 xs:w-[250px] md:w-full">
              <h2 className="text-lg font-bold underline">
                Income Classification
              </h2>
            </div>

            <div className="p-3">
              <h3 className="text-sm">
                {info["Income classification"] ===
                "[HIC's] High-income economies (GNI $13205 or more)"
                  ? "High-Income Economies"
                  : info["Income classification"] ===
                      "[UMIC's] Upper-middle-income economies (GNI $4256 to $13205)"
                    ? "Upper-Middle-Income Economies"
                    : info["Income classification"] ===
                        "[LMIC's] Lower-middle-income economies (GNI $1086 to $4255)"
                      ? "Lower-Middle-Income Economies"
                      : info["Income classification"] ===
                          "[LIC's] Low-income economies (GNI $1085 or less)"
                        ? "Low-Income Economies"
                        : "N/A"}
              </h3>
              <h3 className="text-sm">
                {info["Income classification"] ===
                "[HIC's] High-income economies (GNI $13205 or more)"
                  ? "(GNI $13205 or more)"
                  : info["Income classification"] ===
                      "[UMIC's] Upper-middle-income economies (GNI $4256 to $13205)"
                    ? "(GNI $4256 to $13205)"
                    : info["Income classification"] ===
                        "[LMIC's] Lower-middle-income economies (GNI $1086 to $4255)"
                      ? "(GNI $1086 to $4255)"
                      : info["Income classification"] ===
                          "[LIC's] Low-income economies (GNI $1085 or less)"
                        ? "(GNI $1085 or less)"
                        : "N/A"}
              </h3>
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-lg bg-sky-200 xs:h-2/3 md:h-full">
            <div className="rounded-t-lg bg-red-100 p-3 xs:w-[170px] md:w-full">
              <h2 className="text-lg font-bold underline">Region</h2>
            </div>

            <div className="p-3">
              <h3 className="mb-3 text-sm">{info["Region"]}</h3>
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-lg bg-sky-200 xs:h-2/3 md:h-full">
            <div className="rounded-t-lg bg-red-100 p-3 xs:w-[200px] md:w-full">
              <h2 className="text-lg font-bold underline">2021 Population</h2>
            </div>

            <div className="p-3">
              <h3 className="mb-3 text-sm">
                {info["2021 population"]
                  ? info["2021 population"].toLocaleString()
                  : "N/A"}
              </h3>
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-lg bg-sky-200 xs:h-2/3 md:h-full">
            <div className="rounded-t-lg bg-red-100 p-3 xs:w-[240px] md:w-full">
              <h2 className="text-lg font-bold underline">
                GNI per Capita(Atlas)
              </h2>
            </div>

            <div className="p-3">
              <h3 className="mb-3 text-sm">
                {info["GNI Atlas"]
                  ? new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                    }).format(info["GNI Atlas"]) + " USD"
                  : "N/A"}
              </h3>
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-lg bg-sky-200 xs:h-2/3 md:h-full">
            <div className="rounded-t-lg bg-red-100 p-3 xs:w-[230px] md:w-full">
              <h2 className="text-lg font-bold underline">
                GNI per Capita(PPP)
              </h2>
            </div>

            <div className="p-3">
              <h3 className="mb-3 text-sm">
                {info["GNI PPP"]
                  ? new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                    }).format(info["GNI PPP"]) + " USD"
                  : "N/A"}
              </h3>
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-lg bg-sky-200 xs:h-2/3 md:h-full">
            <div className="rounded-t-lg bg-red-100 p-3 xs:w-[100px] md:w-full">
              <h2 className="text-lg font-bold underline">UN LDC</h2>
            </div>

            <div className="p-3">
              <h3 className="mb-3 text-sm">
                {info["LDC"] === true ? "Yes" : "No"}
              </h3>
            </div>
          </div>

          {/* urban stats */}
          <div className="row-span-3 grid grid-rows-subgrid rounded-lg bg-sky-200 shadow-md">
            <div className="flex flex-col xs:w-[200px] md:w-full">
              <h2 className="rounded-t-lg bg-red-100 p-3 text-lg font-bold underline">
                Urban Stats
              </h2>
              <div className="px-3">
                <h2 className="font-medium underline">Population</h2>
                <h3 className="">
                  {info["Urban population"] ? info["Urban population"] : "N/A"}
                </h3>
              </div>
            </div>

            <div className="px-3 md:mt-12">
              <h2 className="font-medium underline">Electricity Access</h2>
              <h3 className="">
                {info["Urban electricity access"]
                  ? info["Urban electricity access"]
                  : "N/A"}
              </h3>
            </div>

            <div className="px-3 md:mt-6">
              <h2 className="font-medium underline">Internet Connectivity</h2>
              <h3 className="">
                {info["Urban internet connectivity"]
                  ? info["Urban internet connectivity"]
                  : "N/A"}
              </h3>
            </div>
          </div>

          {/* rural stats */}
          <div className="row-span-3 grid grid-rows-subgrid rounded-lg bg-sky-200 shadow-md">
            <div className="flex flex-col justify-between xs:w-[200px] md:w-full">
              <h2 className="rounded-t-lg bg-red-100 p-3 text-lg font-bold underline">
                Rural Stats
              </h2>
              <div className="px-3">
                <h2 className="font-medium underline">Population</h2>
                <h3 className="">
                  {info["Rural population"] ? info["Rural population"] : "N/A"}
                </h3>
              </div>
            </div>

            <div className="px-3 md:mt-12">
              <h2 className="font-medium underline">Electricity Access</h2>
              <h3 className="">
                {info["Rural electricity access"]
                  ? info["Rural electricity access"]
                  : "N/A"}
              </h3>
            </div>

            <div className="px-3 md:mt-6">
              <h2 className="font-medium underline">Internet Connectivity</h2>
              <h3 className="">
                {info["Rural internet connectivity"]
                  ? info["Rural internet connectivity"]
                  : "N/A"}
              </h3>
            </div>
          </div>
        </div>
      </div>
      {/* bottom */}
      <div className="rounded-b-lg bg-gray-600 xs:h-2/5 md:h-2/6">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d207446.33037958093!2d139.57572017964438!3d35.66840983669444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b857628235d%3A0xcdd8aef709a2b520!2sTokyo%2C%20Japan!5e0!3m2!1sen!2sca!4v1704922916435!5m2!1sen!2sca"
          width="800"
          height="500"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-full w-full rounded-b-lg"
        ></iframe>
      </div>
    </div>
  );
}
