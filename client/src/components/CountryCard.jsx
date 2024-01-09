import React from "react";

import {
  IconCaretDownFilled,
  IconPlus,
  IconTorii,
  IconWifi,
  IconSun,
} from "@tabler/icons-react";

export default function CountryCard() {

  return (
    <div
      className={`bg-[url('https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=2388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover w-52 h-72 rounded-xl flex flex-col justify-between hover:cursor-pointer group`}
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
      <div className="hidden group-hover:block">
test
      </div>
    </div>
  );
}
