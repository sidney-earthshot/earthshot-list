import React from "react";

import {
  IconStarFilled,
  IconThumbUpFilled,
  IconHeartFilled,
} from "@tabler/icons-react";

export default function Benchmark({ info }) {
  return (
    <div className="flex h-[815px] flex-col">
      {/* top */}
      <div className="h-1/2 bg-gray-400">
        <h1 className="m-4 h-1/6 rounded-b-lg border-b-4 p-2 text-3xl font-bold text-white">
          Benchmark Stats
        </h1>
        <div className="m-4 grid h-4/6 grid-cols-3 place-items-stretch gap-4 p-2 [&>*]:rounded-xl">
          <div className="flex items-center justify-between bg-white p-4">
            <h2 className="">Stat</h2>
            <h3 className="">Number</h3>
          </div>
          <div className="flex items-center justify-between bg-white p-4">
            <h2 className="">Stat</h2>
            <h3 className="">Number</h3>
          </div>
          <div className="flex items-center justify-between bg-white p-4">
            <h2 className="">Stat</h2>
            <h3 className="">Number</h3>
          </div>
          <div className="flex items-center justify-between bg-white p-4">
            <h2 className="">Stat</h2>
            <h3 className="">Number</h3>
          </div>
          <div className="flex items-center justify-between bg-white p-4">
            <h2 className="">Stat</h2>
            <h3 className="">Number</h3>
          </div>
          <div className="flex items-center justify-between bg-white p-4">
            <h2 className="">Stat</h2>
            <h3 className="">Number</h3>
          </div>
          <div className="flex items-center justify-between bg-white p-4">
            <h2 className="">Stat</h2>
            <h3 className="">Number</h3>
          </div>
          <div className="flex items-center justify-between bg-white p-4">
            <h2 className="">Stat</h2>
            <h3 className="">Number</h3>
          </div>
          <div className="flex items-center justify-between bg-white p-4">
            <h2 className="">Stat</h2>
            <h3 className="">Number</h3>
          </div>
          <div className="flex items-center justify-between bg-white p-4">
            <h2 className="">Stat</h2>
            <h3 className="">Number</h3>
          </div>
          <div className="flex items-center justify-between bg-white p-4">
            <h2 className="">Stat</h2>
            <h3 className="">Number</h3>
          </div>
          <div className="flex items-center justify-between bg-white p-4">
            <h2 className="">Stat</h2>
            <h3 className="">Number</h3>
          </div>
        </div>
      </div>

      {/* bottom */}
      <div className="h-1/2 rounded-b-xl">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d207446.33037958093!2d139.57572017964438!3d35.66840983669444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b857628235d%3A0xcdd8aef709a2b520!2sTokyo%2C%20Japan!5e0!3m2!1sen!2sca!4v1704922916435!5m2!1sen!2sca"
          width="800"
          height="500"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-b-xl w-full h-full"
        ></iframe>
      </div>
    </div>
  );
}
