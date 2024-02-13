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

      {/* tittle */}
      <div className="flex flex-col items-center justify-center group-hover:hidden">
        <h1 className="font-medium text-white xs:text-2xl md:text-xl lg:text-xl xl:text-xl 2xl:text-2xl">
          {info["Country"]}
        </h1>
      </div>

      {/* bottom */}

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
