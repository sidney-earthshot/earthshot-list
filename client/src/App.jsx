import { useState, useRef } from "react";
import { IconCaretDownFilled, IconPlus, IconTorii, IconWifi } from "@tabler/icons-react";

import "./App.css";

import CountryCard from "./components/CountryCard";

function App() {
  const [email, setEmail] = useState("");
  const [search, setSearch] = useState("");

  const filterRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleSearch = (e) => {
    e.preventDefault();
  };

  const focusFilter = () => {
    filterRef.current && filterRef.current.focus();
  };

  return (
    <>
      {/* gif background */}
      <div
        className={`w-full flex flex-col bg-sky-500 h-screen bg-[url('/tokyo.gif')] bg-no-repeat bg-cover`}
      >
        {/* hold profile top left */}
        <div className="flex items-center p-5 h-fit">
          <img
            className="w-10 h-10 rounded-full object-cover"
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          ></img>
          <IconCaretDownFilled style={{ color: "white" }} />
        </div>
        {/* holds title and right sign in */}
        <div className="flex items-center justify-evenly h-screen p-5 w-full ">
          <div className="flex flex-col items-start w-[600px] [&>*]:m-2">
            <p className="text-white text-7xl font-medium">🌎 Go nomad</p>
            <p className="text-white text-3xl font-normal">
              Join a global community of remote workers living and travelling
              around the world
            </p>
            <div className="flex">
              <img
                className="w-10 h-10 rounded-full object-cover outline outline-white z-30"
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              ></img>
              <img
                className="w-10 h-10 rounded-full object-cover outline outline-white z-20"
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              ></img>
              <img
                className="w-10 h-10 rounded-full object-cover outline outline-white z-10"
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              ></img>
            </div>
          </div>

          {/* card sign in */}
          <div className="bg-white p-6 shadow-lg rounded-xl w-80 m-2">
            <img
              className="w-full h-[150px] object-cover rounded-xl hover:opacity-80 hover:cursor-pointer"
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            ></img>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                id="email"
                required
                placeholder="Email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded-lg shadow-sm px-3 py-3 my-5 focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-600"
              ></input>
              <button
                type="submit"
                className="bg-red-600 w-full rounded-lg py-2 text-white font-bold text-lg"
              >
                Go nomad
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* companies logos */}

      <div className="flex justify-center m-7 [&>*]:w-16 [&>*]:mx-5 ">
        <img
          className=""
          src="https://p7.hiclipart.com/preview/717/662/409/cnbc-logo-of-nbc-business-business.jpg"
        ></img>
        <img
          className=""
          src="https://p7.hiclipart.com/preview/717/662/409/cnbc-logo-of-nbc-business-business.jpg"
        ></img>
        <img
          className=""
          src="https://p7.hiclipart.com/preview/717/662/409/cnbc-logo-of-nbc-business-business.jpg"
        ></img>
        <img
          className=""
          src="https://p7.hiclipart.com/preview/717/662/409/cnbc-logo-of-nbc-business-business.jpg"
        ></img>
        <img
          className=""
          src="https://p7.hiclipart.com/preview/717/662/409/cnbc-logo-of-nbc-business-business.jpg"
        ></img>
        <img
          className=""
          src="https://p7.hiclipart.com/preview/717/662/409/cnbc-logo-of-nbc-business-business.jpg"
        ></img>
        <img
          className=""
          src="https://p7.hiclipart.com/preview/717/662/409/cnbc-logo-of-nbc-business-business.jpg"
        ></img>
      </div>

      {/* filters and search bar */}
      <div className="">
        <div className="flex justify-between">
          <div className="flex items-center space-x-4 ml-16">
            <button className="border rounded-lg shadow-sm px-3 py-2 text-red-600 font-bold border-red-600 hover:bg-red-600 hover:text-white">
              Filters
            </button>
            <form onSubmit={handleSearch}>
              <input
                type="text"
                ref={filterRef}
                placeholder="Search or filter..."
                value={search}
                className="font-bold border border-gray-300 rounded-full shadow-sm px-3 py-3 my-5 focus:outline-none focus:border-red-300 focus:ring-2 focus:ring-red-300 hover:bg-gray-100"
              ></input>
            </form>
            <button
              className="flex items-center absolute left-[340px] bg-red-600 rounded-full p-1"
              onClick={focusFilter}
            >
              <IconPlus className="" color="white" />
            </button>
          </div>

          <div className="flex items-center mr-16 space-x-4 [&>*]:py-2 [&>*]:px-8 [&>*]:font-bold">
            <button className="border border-gray-300 rounded-xl shadow-sm px-3 my-5 focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-600 hover:bg-gray-100">
              Grid View
            </button>
            <button className="border border-gray-300 rounded-xl shadow-sm px-3 my-5 focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-600 hover:bg-gray-100">
              Sort by
            </button>
          </div>
        </div>

        <div className="[&>*]:text-gray-400 [&>*]:py-2 [&>*]:px-3 [&>*]:font-bold space-x-4 ml-16 flex">
          <button className="border-dashed border-2 border-gray-300 rounded-full shadow-sm px-3 my-5 focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-600 hover:bg-gray-200 flex hover:text-black">
            <IconTorii />
            Asia
          </button>
          <button className="border-dashed border-2 border-gray-300 rounded-full shadow-sm px-3 my-5 focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-600 hover:bg-gray-200 flex hover:text-black">
            <IconTorii />
            Europe
          </button>
          <button className="border-dashed border-2 border-gray-300 rounded-full shadow-sm px-3 my-5 focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-600 hover:bg-gray-200 flex hover:text-black">
            <IconTorii />
            Latin America
          </button>
          <button className="border-dashed border-2 border-gray-300 rounded-full shadow-sm px-3 my-5 focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-600 hover:bg-gray-200 flex hover:text-black">
            <IconTorii />
            North America
          </button>
        </div>
      </div>

      {/* main grid section */}
      <div className="grid grid-cols-9 gap-8 mx-16">
        <CountryCard />

        <CountryCard />

        <CountryCard />

        <CountryCard />

        <CountryCard />

        <CountryCard />

        <CountryCard />

        <CountryCard />

        <CountryCard />

        <CountryCard />

        <CountryCard />

        <CountryCard />

        <CountryCard />

        <CountryCard />
      </div>
    </>
  );
}

export default App;
