import React from "react";

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
} from "@tabler/icons-react";

import CountryModal from "./CountryModal";

export default function CountryCard({handleModal}) {

  return (
    <div
      className={`bg-[url('https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=2388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover w-52 h-72 rounded-xl flex flex-col justify-between hover:cursor-pointer group`}
      onClick={handleModal}
    >
      {/* top */}
      <div className="flex justify-between m-4 group-hover:hidden">
        <h1 className="text-white font-bold text-2xl underline underline-offset-8">
          1
        </h1>

        <div className="flex items-center">
          <IconWifi color="white" />
          <div className="flex flex-col items-center">
            <div className="text-white font-bold text-xl">89</div>
            <p className="text-white font-bold text-xs">Mbps</p>
          </div>
        </div>
      </div>

      {/* tittle */}
      <div className="flex flex-col items-center group-hover:hidden">
        <h1 className="text-white font-medium text-4xl">Tokyo</h1>
        <h2 className="text-white">Japan</h2>
      </div>

      {/* bottom */}
      <div className="group-hover:hidden">
        <div className="flex justify-between m-4">
          <div className="flex items-center">
            <IconSun color="yellow" />
            <div className="">
              <p className="text-white font-semibold text-[10px]">Feels 34°</p>
              <p className="text-white font-semibold text-xl">33°</p>
            </div>
          </div>

          <div className="flex flex-col items-end">
            <p className="text-white font-semibold text-xl">$1448 / mo</p>
            <p className="text-white font-medium text-[10px]">FOR A NOMAD</p>
          </div>
        </div>
      </div>

      {/* stats hidden */}
      <div className="hidden group-hover:block bg-black h-full rounded-lg bg-opacity-70">
        <div className="flex justify-between m-4">
          <IconHeart color="white" size={30} />
          <IconX color="white" size={30} />
        </div>

        <div className="flex flex-col space-y-2">
          <div className="flex justify-evenly">
            <div className="flex items-center">
              <IconStarFilled
                color="white"
                style={{ color: "yellow" }}
                size={15}
              />
              <p className="text-white">Overall</p>
            </div>
            <div className="border w-6/12 rounded-full bg-gradient-to-r from-green-500 from-90% to-transparent to to-90%"></div>
          </div>

          <div className="flex justify-evenly">
            <div className="flex items-center">
              <IconCash color="green" size={15} />
              <p className="text-white">Overall</p>
            </div>
            <div className="border w-6/12 rounded-full bg-gradient-to-r from-red-500 from-10% to-transparent to to-10%"></div>
          </div>

          <div className="flex justify-evenly">
            <div className="flex items-center">
              <IconSatellite color="gray" size={15} />
              <p className="text-white">Overall</p>
            </div>
            <div className="border w-6/12 rounded-full bg-gradient-to-r from-orange-500 from-50% to-transparent to to-50%"></div>
          </div>

          <div className="flex justify-evenly">
            <div className="flex items-center">
              <IconThumbUpFilled
                color="white"
                style={{ color: "yellow" }}
                size={15}
              />
              <p className="text-white">Overall</p>
            </div>
            <div className="border w-6/12 rounded-full bg-gradient-to-r from-green-500 from-75% to-transparent to to-75%"></div>
          </div>

          <div className="flex justify-evenly">
            <div className="flex items-center">
              <IconShieldFilled
                color="white"
                style={{ color: "cyan" }}
                size={15}
              />
              <p className="text-white">Overall</p>
            </div>
            <div className="border w-6/12 rounded-full bg-gradient-to-r from-green-500 from-100% to-transparent to to-100%"></div>
          </div>

          <div className="flex justify-center">
            <p className="text-white">Love living here</p>
          </div>
        </div>
      </div>
    </div>
  );
}
