import React from "react";

import {
  IconStarFilled,
  IconThumbUpFilled,
  IconHeartFilled,
} from "@tabler/icons-react";

export default function TabContent({ info }) {
  return (
    <div className="text-black flex">
      {/* left */}
      <div className="flex flex-col w-1/2 h-[800px] [&>*]:p-4 [&>*]:border [&>*]border-b-gray-200 [&>*]border-r-gray-200 overflow-y-auto">
        <div className="flex justify-between border border-b-gray-200 border-r-gray-200">
          <div className="flex items-center space-x-2">
            <IconStarFilled style={{ color: "yellow" }} size={20} />
            <p className="">Total Score</p>
          </div>

          <div
            className={`${
              info.overview.overall >= 3.6
                ? "bar-green"
                : info.overview.overall <= 2.5
                ? "bar-red"
                : "bar-orange"
            } bg-gray-400`}
          >
            {info.overview.overall}/5
          </div>
        </div>

        <div className="flex justify-between">
          <div className="flex items-center space-x-2">
            <IconHeartFilled style={{ color: "red" }} size={20} />
            <p className="">Liked by members</p>
          </div>

          <div
            className={`${
              info.overview.liked >= 3.6
                ? "bar-green"
                : info.overview.liked <= 2.5
                ? "bar-red"
                : "bar-orange"
            } bg-gray-400`}
          >
            {info.overview.liked * 20}% liked
          </div>
        </div>

        <div className="flex justify-between">
          <div className="flex items-center space-x-2">
            <IconThumbUpFilled style={{ color: "cyan" }} size={20} />
            <p className="">Community</p>
          </div>

          <div
            className={`${
              info.overview.community >= 3.6
                ? "bar-green"
                : info.overview.overall <= 2.5
                ? "bar-red"
                : "bar-orange"
            } bg-gray-400`}
          >
            {info.overview.community >= 3.6
              ? "Good"
              : info.overview.overall <= 2.5
              ? "Bad"
              : "Okay"}
          </div>
        </div>

        <div className="flex justify-between">
          <div className="flex items-center space-x-2">
            <IconThumbUpFilled style={{ color: "cyan" }} size={20} />
            <p className="">Family</p>
          </div>

          <div
            className={`${
              info.overview.family >= 3.6
                ? "bar-green"
                : info.overview.family <= 2.5
                ? "bar-red"
                : "bar-orange"
            } bg-gray-400`}
          >
            {info.overview.family >= 3.6
              ? "Good"
              : info.overview.family <= 2.5
              ? "Bad"
              : "Okay"}
          </div>
        </div>

        <div className="flex justify-between">
          <div className="flex items-center space-x-2">
            <IconThumbUpFilled style={{ color: "cyan" }} size={20} />
            <p className="">Fun</p>
          </div>

          <div
            className={`${
              info.overview.fun >= 3.6
                ? "bar-green"
                : info.overview.fun <= 2.5
                ? "bar-red"
                : "bar-orange"
            } bg-gray-400`}
          >
            {info.overview.fun >= 3.6
              ? "Good"
              : info.overview.fun <= 2.5
              ? "Bad"
              : "Okay"}
          </div>
        </div>

        <div className="flex justify-between">
          <div className="flex items-center space-x-2">
            <IconThumbUpFilled style={{ color: "cyan" }} size={20} />
            <p className="">Racism</p>
          </div>

          <div
            className={`${
              info.overview.racism >= 3.6
                ? "bar-green"
                : info.overview.racism <= 2.5
                ? "bar-red"
                : "bar-orange"
            } bg-gray-400`}
          >
            {info.overview.racism >= 3.6
              ? "Good"
              : info.overview.racism <= 2.5
              ? "Bad"
              : "Okay"}
          </div>
        </div>

        <div className="flex justify-between">
          <div className="flex items-center space-x-2">
            <IconThumbUpFilled style={{ color: "cyan" }} size={20} />
            <p className="">Education</p>
          </div>

          <div
            className={`${
              info.overview.education >= 3.6
                ? "bar-green"
                : info.overview.education <= 2.5
                ? "bar-red"
                : "bar-orange"
            } bg-gray-400`}
          >
            {info.overview.education >= 3.6
              ? "Good"
              : info.overview.education <= 2.5
              ? "Bad"
              : "Okay"}
          </div>
        </div>

        <div className="flex justify-between">
          <div className="flex items-center space-x-2">
            <IconThumbUpFilled style={{ color: "cyan" }} size={20} />
            <p className="">Traffic</p>
          </div>

          <div
            className={`${
              info.overview.traffic >= 3.6
                ? "bar-green"
                : info.overview.traffic <= 2.5
                ? "bar-red"
                : "bar-orange"
            } bg-gray-400`}
          >
            {info.overview.traffic >= 3.6
              ? "Good"
              : info.overview.traffic <= 2.5
              ? "Bad"
              : "Okay"}
          </div>
        </div>

        <div className="flex justify-between">
          <div className="flex items-center space-x-2">
            <IconThumbUpFilled style={{ color: "cyan" }} size={20} />
            <p className="">Walkability</p>
          </div>

          <div
            className={`${
              info.overview.walkability >= 3.6
                ? "bar-green"
                : info.overview.walkability <= 2.5
                ? "bar-red"
                : "bar-orange"
            } bg-gray-400`}
          >
            {info.overview.walkability >= 3.6
              ? "Good"
              : info.overview.walkability <= 2.5
              ? "Bad"
              : "Okay"}
          </div>
        </div>
      </div>
      {/* right */}
      <div className="">
        <iframe
          src={`${info.overview.map_url}`}
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
