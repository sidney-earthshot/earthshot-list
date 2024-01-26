import React from "react";

import {
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

export default function CountryCard({ handleModal, info }) {
  return (
    <div
      style={{ "--image-url": `url(${info["Image URL"]})` }}
      className={`group flex h-72 w-11/12 flex-col justify-center rounded-xl bg-[image:var(--image-url)] bg-cover hover:cursor-pointer`}
      onClick={handleModal}
    >
      {/* top */}
      {/* <div className="flex justify-between m-4 group-hover:hidden">
        <h1 className="text-white font-bold text-2xl underline underline-offset-8">
          {"Rank 1"}
        </h1>

        <div className="flex items-center">
          <IconWifi color="white" />
          <div className="flex flex-col items-center">
            <div className="text-white font-bold text-xl">{"89"}</div>
            <p className="text-white font-bold text-xs">Mbps</p>
          </div>
        </div>
      </div> */}

      {/* tittle */}
      <div className="flex flex-col items-center justify-center group-hover:hidden">
        <h1 className="font-medium text-white xs:text-2xl 2xl:text-3xl">
          {info["Country"]}
        </h1>
      </div>

      {/* bottom */}
      {/* <div className="group-hover:hidden">
        <div className="flex justify-between m-4">
          <div className="flex items-center">
            <IconSun color="yellow" />
            <div className="">
              <p className="text-white font-semibold text-[10px]">Feels 34°</p>
              <p className="text-white font-semibold text-xl">33°</p>
            </div>
          </div>

          <div className="flex flex-col items-end">
            <p className="text-white font-semibold text-xl">{`$500`} / mo</p>
            <p className="text-white font-medium text-[10px]">FOR A NOMAD</p>
          </div>
        </div>
      </div> */}

      {/* stats hidden */}
      <div className="hidden h-full rounded-lg bg-black bg-opacity-70 group-hover:block">
        <div className="m-4 flex justify-between">
          <IconHeart color="white" size={30} />
          <IconX color="white" size={30} />
        </div>

        <div className="flex flex-col space-y-2">
          <div className="mx-4 flex justify-between">
            <div className="flex items-center">
              <IconStarFilled
                color="white"
                style={{ color: "yellow" }}
                size={15}
              />
              <p className="text-white">Overall</p>
            </div>
            <div className={`bar-green`}></div>
          </div>

          <div className="mx-4 flex justify-between">
            <div className="flex items-center">
              <IconCash color="green" size={15} />
              <p className="text-white">Cost</p>
            </div>
            <div className={`bar-green`}></div>
          </div>

          <div className="mx-4 flex justify-between">
            <div className="flex items-center">
              <IconSatellite color="gray" size={15} />
              <p className="text-white">Internet</p>
            </div>
            <div className={`bar-green`}></div>
          </div>

          <div className="mx-4 flex justify-between">
            <div className="flex items-center">
              <IconThumbUpFilled
                color="white"
                style={{ color: "yellow" }}
                size={15}
              />
              <p className="text-white">Liked</p>
            </div>
            <div className={`bar-green`}></div>
          </div>

          <div className="mx-4 flex justify-between">
            <div className="flex items-center">
              <IconShieldFilled
                color="white"
                style={{ color: "cyan" }}
                size={15}
              />
              <p className="text-white">Safety</p>
            </div>
            <div className={`bar-green`}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
