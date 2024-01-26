import React, { useState, useRef, useEffect } from "react";

import {
  Routes,
  Route,
  Link,
  NavLink,
  useNavigate,
  useLocation,
  useParams,
} from "react-router-dom";

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

import ".././App.css";

import CountryCard from ".././components/CountryCard";
import CountryModal from ".././components/CountryModal";

import { checkNestedItem } from ".././functions/check";

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

export default function Home() {
  const navigate = useNavigate();

  const { countryName } = useParams();

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

  // closes modal and navigates back to home URL
  const handleClose = () => {
    setVisibleModal(false);
    navigate(`/`);
  };

  const toggleFilter = () => {
    setIsFilterExpanded(!isFilterExpanded);
  };

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);

      console.log(countryName)

      if (countryName) {
        const response = await fetch(
          `http://localhost:3000/api/country/${countryName}`
        );
        const cleaned = await response.json();

        setCurrentLocation(cleaned[0]);
        setVisibleModal(true);
      } else {
        setVisibleModal(false);
      }

      try {
        const response = await fetch(`http://localhost:3000/api/countries`);
        const cleaned = await response.json();

        setLocations(cleaned);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, [countryName]);

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
        className={`flex h-[500px] w-full flex-col bg-sky-500 bg-[url('/tokyo.gif')] bg-cover bg-no-repeat`}
      >
        {/* hold profile top left */}
        <div className="flex h-fit items-center p-5">
          <img
            className="h-10 w-10 rounded-full object-cover shadow-md hover:cursor-pointer"
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          ></img>
          <IconCaretDownFilled
            style={{ color: "white" }}
            className="shadow-md hover:cursor-pointer"
          />
        </div>
        {/* holds title and right sign in */}
        <div className="flex h-screen w-full items-center justify-evenly p-5 xs:flex-col lg:flex-row ">
          <div className="flex w-[600px] flex-col items-start [&>*]:m-2">
            <p className="text-5xl font-medium text-white">
              🌎 Learn more about our world
            </p>
            <p className="text-2xl font-normal text-white">
              Explore the problems that each country faces with over 200
              available countries
            </p>
            <div className="flex">
              <img
                className="z-30 h-10 w-10 rounded-full object-cover outline outline-white"
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              ></img>
              <img
                className="z-20 h-10 w-10 rounded-full object-cover outline outline-white"
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              ></img>
              <img
                className="z-10 h-10 w-10 rounded-full object-cover outline outline-white"
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              ></img>
            </div>
          </div>

          {/* card sign in */}
          <div className="m-2 w-80 rounded-xl bg-white p-6 shadow-lg">
            <img
              className="h-[150px] w-full rounded-xl object-cover hover:cursor-pointer hover:opacity-80"
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
                className="my-5 w-full rounded-lg border border-gray-300 px-3 py-3 shadow-sm focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600"
              ></input>
              <button
                type="submit"
                className="w-full rounded-lg bg-red-600 py-2 text-lg font-bold text-white"
              >
                Go nomad
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* companies logos */}

      <div className="m-7 flex justify-center overflow-x-auto [&>*]:mx-5 [&>*]:w-16 [&>*]:flex-shrink-0">
        {logos.map((logo, i) => {
          return <img key={logo.url + i} className="" src={logo.url}></img>;
        })}
      </div>

      {/* filters and search bar */}

      <div className="flex flex-col">
        <div className="flex justify-between">
          <div className="ml-16 flex items-center space-x-4">
            <button
              className={`rounded-lg border border-red-600 px-3 py-2 font-bold shadow-md  hover:text-white ${isFilterExpanded ? "bg-red-600 text-white" : "text-red-600 hover:bg-red-600"}`}
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
                className="my-5 flex w-96 rounded-full border border-gray-300 px-3 py-3 font-bold shadow-md hover:bg-gray-100 focus:border-red-300 focus:outline-none focus:ring-2 focus:ring-red-300"
                onChange={handleSearch}
              ></input>
            </form>
            <button
              className="absolute left-[480px] flex items-center rounded-full bg-red-600 p-1"
              onClick={focusFilter}
            >
              <IconPlus className="" color="white" />
            </button>
          </div>

          {/* view buttons */}
          <div className="mr-16 items-center space-x-4 xs:hidden sm:flex [&>*]:px-8 [&>*]:py-2 [&>*]:font-bold">
            <button className="my-5 rounded-xl border border-gray-300 px-3 shadow-md hover:bg-gray-100 focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600">
              Grid View
            </button>
            <button className="my-5 rounded-xl border border-gray-300 px-3 shadow-md hover:bg-gray-100 focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600">
              Sort by
            </button>
          </div>
        </div>

        {/* expanded filter and filter buttons */}
        {/* [&>*]:text-gray-400 [&>*]:py-2 [&>*]:px-3 [&>*]:font-bold space-x-4 ml-16 xs:ml-8 flex [&>*]:flex-shrink-0 overflow-x-auto */}

        <div
          className={`transition-all duration-500 ease-in-out ${isFilterExpanded ? "h-96 opacity-100" : "invisible h-0 opacity-0 "} overflow-y-auto bg-red-500`}
        >
          {filters.map((filter, filterInd) => {
            return (
              <React.Fragment key={`filter_${filter.category}`}>
                <div
                  key={`filter_${filterInd}_header`}
                  className="mx-4 flex border-b-2 p-4 text-xl text-white"
                >
                  {filter.category}
                </div>
                <div
                  key={`filter_${filterInd}_buttons`}
                  className="ml-4 mt-4 flex items-center overflow-x-auto pb-4 [&>*]:mx-1 [&>*]:p-2"
                >
                  {filter.buttons.map((button, buttonInd) => {
                    return (
                      <button
                        key={`filter_${filterInd}_button_${buttonInd}`}
                        className="flex-shrink-0 rounded-full border-2 text-white shadow-md"
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

        <div className="ml-16 flex space-x-4 overflow-x-auto xs:ml-8 [&>*]:flex-shrink-0 [&>*]:px-3 [&>*]:py-2 [&>*]:font-bold">
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
                className={`my-5 flex rounded-full border-2 border-dashed border-gray-300 px-3 shadow-md ${buttonClasses}`}
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
        <div className="mx-8 grid min-h-96 place-items-center gap-y-4 sm:grid-cols-1  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7">
          <div
            className={`flex h-72 w-11/12 animate-pulse flex-col items-center justify-center rounded-xl border-4`}
          >
            <div className="mb-2 h-5 w-6/12 animate-pulse rounded-xl border-4"></div>
            <div className="h-4 w-5/12 animate-pulse rounded-xl border-4"></div>
          </div>
          <div
            className={`flex h-72 w-11/12 animate-pulse flex-col items-center justify-center rounded-xl border-4`}
          >
            <div className="mb-2 h-5 w-6/12 animate-pulse rounded-xl border-4"></div>
            <div className="h-4 w-5/12 animate-pulse rounded-xl border-4"></div>
          </div>
          <div
            className={`flex h-72 w-11/12 animate-pulse flex-col items-center justify-center rounded-xl border-4`}
          >
            <div className="mb-2 h-5 w-6/12 animate-pulse rounded-xl border-4"></div>
            <div className="h-4 w-5/12 animate-pulse rounded-xl border-4"></div>
          </div>
          <div
            className={`flex h-72 w-11/12 animate-pulse flex-col items-center justify-center rounded-xl border-4`}
          >
            <div className="mb-2 h-5 w-6/12 animate-pulse rounded-xl border-4"></div>
            <div className="h-4 w-5/12 animate-pulse rounded-xl border-4"></div>
          </div>
        </div>
      ) : (
        <>
          <div className="mx-8 mb-8 grid min-h-96 place-items-center gap-y-4 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
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
                      navigate(`${location.Country}`);
                    }}
                    info={location}
                  />
                );
              })}
          </div>

          <CountryModal
            key={location.Country + " Modal"}
            visible={visibleModal}
            onClose={handleClose}
            info={currentLocation}
          />
        </>
      )}
    </>
  );
}
