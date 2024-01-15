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
      style={{ "--image-url": `url(${info.image_url})` }}
      className={`bg-[image:var(--image-url)] bg-cover w-11/12 h-72 rounded-xl flex flex-col justify-between hover:cursor-pointer group`}
      onClick={handleModal}
    >
      {/* top */}
      <div className="flex justify-between m-4 group-hover:hidden">
        <h1 className="text-white font-bold text-2xl underline underline-offset-8">
          {info.rank}
        </h1>

        <div className="flex items-center">
          <IconWifi color="white" />
          <div className="flex flex-col items-center">
            <div className="text-white font-bold text-xl">
              {info.internet_speed}
            </div>
            <p className="text-white font-bold text-xs">Mbps</p>
          </div>
        </div>
      </div>

      {/* tittle */}
      <div className="flex flex-col items-center group-hover:hidden">
        <h1 className="text-white font-medium text-4xl">{info.city}</h1>
        <h2 className="text-white">{info.country}</h2>
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
            <p className="text-white font-semibold text-xl">
              {`$${info.average_rent}`} / mo
            </p>
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
          <div className="flex justify-between mx-4">
            <div className="flex items-center">
              <IconStarFilled
                color="white"
                style={{ color: "yellow" }}
                size={15}
              />
              <p className="text-white">Overall</p>
            </div>
            <div
              className={`${
                info.overview.overall >= 3.6
                  ? "bar-green"
                  : info.overall <= 2.5
                  ? "bar-red"
                  : "bar-orange"
              }`}
            ></div>
          </div>

          <div className="flex justify-between mx-4">
            <div className="flex items-center">
              <IconCash color="green" size={15} />
              <p className="text-white">Cost</p>
            </div>
            <div
              className={`${
                info.overview.cost >= 3.6
                  ? "bar-green"
                  : info.overall <= 2.5
                  ? "bar-red"
                  : "bar-orange"
              }`}
            ></div>
          </div>

          <div className="flex justify-between mx-4">
            <div className="flex items-center">
              <IconSatellite color="gray" size={15} />
              <p className="text-white">Internet</p>
            </div>
            <div
              className={`${
                info.overview.internet >= 3.6
                  ? "bar-green"
                  : info.overall <= 2.5
                  ? "bar-red"
                  : "bar-orange"
              }`}
            ></div>
          </div>

          <div className="flex justify-between mx-4">
            <div className="flex items-center">
              <IconThumbUpFilled
                color="white"
                style={{ color: "yellow" }}
                size={15}
              />
              <p className="text-white">Liked</p>
            </div>
            <div
              className={`${
                info.overview.liked >= 3.6
                  ? "bar-green"
                  : info.overall <= 2.5
                  ? "bar-red"
                  : "bar-orange"
              }`}
            ></div>
          </div>

          <div className="flex justify-between mx-4">
            <div className="flex items-center">
              <IconShieldFilled
                color="white"
                style={{ color: "cyan" }}
                size={15}
              />
              <p className="text-white">Safety</p>
            </div>
            <div
              className={`${
                info.overview.safety >= 3.6
                  ? "bar-green"
                  : info.overall <= 2.5
                  ? "bar-red"
                  : "bar-orange"
              }`}
            ></div>
          </div>

          <div className="flex justify-center">
            <p className="text-white">Love living here</p>
          </div>
        </div>
      </div>
    </div>
  );
}
