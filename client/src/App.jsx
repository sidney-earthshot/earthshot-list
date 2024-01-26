import React, { useState, useRef, useEffect } from "react";
import {
  IconCaretDownFilled,
  IconPlus,
  IconTorii,
  IconCurrencyEuro,
  IconBallAmericanFootball,
  IconBallFootball,
  IconMountain,
  IconRipple,
  IconCactus,
} from "@tabler/icons-react";

import "./App.css";

import CountryCard from "./components/CountryCard";
import CountryModal from "./components/CountryModal";

import { checkNestedItem } from "./functions/check";

const filters = [
  {
    category: "General",
    buttons: ["Income Class", "Population > 1 000 000", "LDC Group"],
  },
  {
    category: "Food and Agriculture",
    buttons: ["Retail Food Waste", "Cost of Nutrient Adequacy"],
  },
  {
    category: "Healthcare",
    buttons: ["Travel Time", "Life Expectancy"],
  },
  {
    category: "Water",
    buttons: ["Drinking Water Quality", "Fecal Amount"],
  },
  {
    category: "Energy",
    buttons: ["Primary Consumption", "Coal", "Solar"],
  },
  {
    category: "Affordable Housing",
    buttons: [
      "Price per Sqft",
      "Average Household Income",
      "Building Code Compliance Rate",
    ],
  },
  {
    category: "Environment",
    buttons: ["Option 1"],
  },
  {
    category: "Economic Prosperity",
    buttons: ["Option 2"],
  },
];

const continentButtons = [
  { name: "Asia", icon: <IconTorii /> },
  { name: "Europe", icon: <IconCurrencyEuro /> },
  { name: "North America", icon: <IconBallAmericanFootball /> },
  { name: "South America", icon: <IconBallFootball /> },
  { name: "Africa", icon: <IconMountain /> },
  { name: "Oceania", icon: <IconRipple /> },
  { name: "Middle East", icon: <IconCactus /> },
];

const logos = [
  {
    url: "https://p7.hiclipart.com/preview/717/662/409/cnbc-logo-of-nbc-business-business.jpg",
  },
  {
    url: "https://p7.hiclipart.com/preview/717/662/409/cnbc-logo-of-nbc-business-business.jpg",
  },
  {
    url: "https://p7.hiclipart.com/preview/717/662/409/cnbc-logo-of-nbc-business-business.jpg",
  },
  {
    url: "https://p7.hiclipart.com/preview/717/662/409/cnbc-logo-of-nbc-business-business.jpg",
  },
  {
    url: "https://p7.hiclipart.com/preview/717/662/409/cnbc-logo-of-nbc-business-business.jpg",
  },
  {
    url: "https://p7.hiclipart.com/preview/717/662/409/cnbc-logo-of-nbc-business-business.jpg",
  },
];

function App() {
  const [email, setEmail] = useState("");

  const [search, setSearch] = useState("");

  const [visibleModal, setVisibleModal] = useState(false);

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const [locations, setLocations] = useState([]);
  const [currentLocation, setCurrentLocation] = useState("");

  const [isFilterExpanded, setIsFilterExpanded] = useState(false);

  const filterRef = useRef(null);

  const handleSignup = (e) => {
    e.preventDefault();
  };

  const handleSearch = (e) => {
    e.preventDefault();

    setSearch(e.target.value);
  };

  const handleFilterContinent = (continent) => {
    setSearch((prevSearch) => {
      // Split the search string into words, reduce has accumulator as [], word as current word, if previous was north of south, will add america and append to item in array, same logic for middle east

      let searchTerms = prevSearch
        .split(" ")
        .reduce((acc, word) => {
          console.log(acc);
          if (
            acc.length > 0 &&
            (acc[acc.length - 1] === "North" ||
              acc[acc.length - 1] === "South") &&
            word === "America"
          ) {
            acc[acc.length - 1] += ` ${word}`;
          } else if (
            acc.length > 0 &&
            acc[acc.length - 1] === "Middle" &&
            word === "East"
          ) {
            acc[acc.length - 1] += ` ${word}`;
          } else {
            acc.push(word);
          }
          return acc;
        }, [])
        .filter(Boolean);
      const index = searchTerms.indexOf(continent);

      if (index !== -1) {
        // remove continent if found in search
        searchTerms.splice(index, 1);
      } else {
        // Add the continent if not found in search
        searchTerms.push(continent);
      }

      return searchTerms.join(" ");
    });
  };

  const focusFilter = () => {
    filterRef.current && filterRef.current.focus();
  };

  const handleClose = () => {
    setVisibleModal(false);
  };

  const toggleFilter = () => {
    setIsFilterExpanded(!isFilterExpanded);
  };

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(`http://localhost:3000/api/countries`);
        const cleaned = await response.json();

        console.log(cleaned)

        setLocations(cleaned);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (error) {
    return (
      <div className="">Something went wrong! Please refresh the page.</div>
    );
  }

  return (
    <>
      {/* gif background */}
      <div
        // was h-full
        className={`w-full flex flex-col bg-sky-500 h-[500px] bg-[url('/tokyo.gif')] bg-no-repeat bg-cover`}
      >
        {/* hold profile top left */}
        <div className="flex items-center p-5 h-fit">
          <img
            className="w-10 h-10 rounded-full object-cover hover:cursor-pointer shadow-md"
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          ></img>
          <IconCaretDownFilled
            style={{ color: "white" }}
            className="hover:cursor-pointer shadow-md"
          />
        </div>
        {/* holds title and right sign in */}
        <div className="flex xs:flex-col lg:flex-row items-center justify-evenly h-screen p-5 w-full ">
          <div className="flex flex-col items-start w-[600px] [&>*]:m-2">
            <p className="text-white text-5xl font-medium">
              🌎 Learn more about our world
            </p>
            <p className="text-white text-2xl font-normal">
              Explore the problems that each country faces with over 200
              available countries
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
            <form onSubmit={handleSignup}>
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

      <div className="flex justify-center m-7 [&>*]:w-16 [&>*]:mx-5 [&>*]:flex-shrink-0 overflow-x-auto">
        {logos.map((logo, i) => {
          return <img key={logo.url + i} className="" src={logo.url}></img>;
        })}
      </div>

      {/* filters and search bar */}

      <div className="flex flex-col">
        <div className="flex justify-between">
          <div className="flex items-center space-x-4 ml-16">
            <button
              className={`border rounded-lg shadow-md px-3 py-2 font-bold border-red-600  hover:text-white ${isFilterExpanded ? "text-white bg-red-600" : "text-red-600 hover:bg-red-600"}`}
              onClick={toggleFilter}
            >
              Filters
            </button>
            <form onSubmit={handleSearch}>
              <input
                type="text"
                ref={filterRef}
                placeholder="Search or filter..."
                value={search}
                className="font-bold border border-gray-300 rounded-full shadow-md px-3 py-3 my-5 focus:outline-none focus:border-red-300 focus:ring-2 focus:ring-red-300 hover:bg-gray-100 flex w-96"
                onChange={handleSearch}
              ></input>
            </form>
            <button
              className="flex items-center absolute left-[480px] bg-red-600 rounded-full p-1"
              onClick={focusFilter}
            >
              <IconPlus className="" color="white" />
            </button>
          </div>

          {/* view buttons */}
          <div className="sm:flex items-center mr-16 space-x-4 [&>*]:py-2 [&>*]:px-8 [&>*]:font-bold xs:hidden">
            <button className="border border-gray-300 rounded-xl shadow-md px-3 my-5 focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-600 hover:bg-gray-100">
              Grid View
            </button>
            <button className="border border-gray-300 rounded-xl shadow-md px-3 my-5 focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-600 hover:bg-gray-100">
              Sort by
            </button>
          </div>
        </div>

        {/* expanded filter and filter buttons */}
        {/* [&>*]:text-gray-400 [&>*]:py-2 [&>*]:px-3 [&>*]:font-bold space-x-4 ml-16 xs:ml-8 flex [&>*]:flex-shrink-0 overflow-x-auto */}

        <div
          className={`transition-all duration-500 ease-in-out ${isFilterExpanded ? "h-96 opacity-100" : "h-0 opacity-0 invisible "} bg-red-500 overflow-y-auto`}
        >
          {filters.map((filter, filterInd) => {
            return (
              <React.Fragment key={`filter_${filter.category}`}>
                <div
                  key={`filter_${filterInd}_header`}
                  className="flex border-b-2 text-white text-xl p-4 mx-4"
                >
                  {filter.category}
                </div>
                <div
                  key={`filter_${filterInd}_buttons`}
                  className="flex items-center mt-4 ml-4 pb-4 [&>*]:p-2 [&>*]:mx-1 overflow-x-auto"
                >
                  {filter.buttons.map((button, buttonInd) => {
                    return (
                      <button
                        key={`filter_${filterInd}_button_${buttonInd}`}
                        className="border-2 rounded-full text-white flex-shrink-0 shadow-md"
                      >
                        {button}
                      </button>
                    );
                  })}
                </div>
              </React.Fragment>
            );
          })}
        </div>

        <div className="[&>*]:py-2 [&>*]:px-3 [&>*]:font-bold space-x-4 ml-16 xs:ml-8 flex [&>*]:flex-shrink-0 overflow-x-auto">
          {continentButtons.map((button) => {
            //regex tests for whole expression, i for insensitive case

            const regex = new RegExp(`\\b${button.name}\\b`, "i");

            // test looks for name in search
            const isActive = regex.test(search);

            const buttonClasses = isActive
              ? "border-solid border-red-600 bg-red-600 text-white "
              : "border-gray-300 text-gray-400 hover:bg-gray-200 hover:text-black";

            return (
              <button
                key={button.name}
                className={`border-dashed border-2 border-gray-300 rounded-full shadow-md px-3 my-5 flex ${buttonClasses}`}
                onClick={() => handleFilterContinent(button.name)}
              >
                {button.icon}
                {button.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* main grid section */}

      {isLoading ? (
        <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7  place-items-center mx-8 gap-y-4 min-h-96">
          <div
            className={`animate-pulse w-11/12 h-72 rounded-xl flex flex-col justify-center items-center border-4`}
          >
            <div className="animate-pulse w-6/12 h-5 border-4 rounded-xl mb-2"></div>
            <div className="animate-pulse w-5/12 h-4 border-4 rounded-xl"></div>
          </div>
          <div
            className={`animate-pulse w-11/12 h-72 rounded-xl flex flex-col justify-center items-center border-4`}
          >
            <div className="animate-pulse w-6/12 h-5 border-4 rounded-xl mb-2"></div>
            <div className="animate-pulse w-5/12 h-4 border-4 rounded-xl"></div>
          </div>
          <div
            className={`animate-pulse w-11/12 h-72 rounded-xl flex flex-col justify-center items-center border-4`}
          >
            <div className="animate-pulse w-6/12 h-5 border-4 rounded-xl mb-2"></div>
            <div className="animate-pulse w-5/12 h-4 border-4 rounded-xl"></div>
          </div>
          <div
            className={`animate-pulse w-11/12 h-72 rounded-xl flex flex-col justify-center items-center border-4`}
          >
            <div className="animate-pulse w-6/12 h-5 border-4 rounded-xl mb-2"></div>
            <div className="animate-pulse w-5/12 h-4 border-4 rounded-xl"></div>
          </div>
        </div>
      ) : (
        <>
          <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 place-items-center mx-8 gap-y-4 min-h-96 mb-8">
            {locations
              .filter((item) => {
                const searchWords = search.toLowerCase().split(" ");

                // return search.toLowerCase() === ""
                //   ? item
                //   : item.city.toLowerCase().includes(search) ||
                //       item.country.toLowerCase().includes(search) ||
                //       item.continent.toLowerCase().includes(search);

                // return searchWords.every(word =>
                //   item.city.toLowerCase().includes(word) ||
                //   item.country.toLowerCase().includes(word) ||
                //   item.continent.toLowerCase().includes(word)
                // );

                return checkNestedItem(item, searchWords);
              })
              .map((location, i) => {
                return (
                  <CountryCard
                    key={location.Country + " Card"}
                    handleModal={() => {
                      setVisibleModal(true);
                      setCurrentLocation(location);
                    }}
                    info={location}
                  />
                );
              })}
          </div>

          {locations.map((location, i) => {
            return (
              <CountryModal
                key={location.Country + " Modal"}
                visible={visibleModal}
                onClose={handleClose}
                info={currentLocation}
              />
            );
          })}
        </>
      )}
    </>
  );
}

export default App;
