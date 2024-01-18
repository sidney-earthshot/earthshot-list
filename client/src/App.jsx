import { useState, useRef, useEffect } from "react";
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

function App() {
  const [email, setEmail] = useState("");
  const [search, setSearch] = useState("");

  const [visibleModal, setVisibleModal] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const [locations, setLocations] = useState([]);
  const [currentLocation, setCurrentLocation] = useState("");

  const filterRef = useRef(null);

  const filterButtons = [
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

  const handleSignup = (e) => {
    e.preventDefault();
  };

  const handleSearch = (e) => {
    e.preventDefault();

    setSearch(e.target.value);
  };

  const handleSearchContinent = (continent) => {
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

  const checkNestedItem = (obj, searchTerms) => {
    for (let key in obj) {
      if (typeof obj[key] === "string") {
        if (searchTerms.some((term) => obj[key].toLowerCase().includes(term))) {
          return true;
        }
      } else if (typeof obj[key] === "object") {
        if (checkNestedItem(obj[key], searchTerms)) {
          return true;
        }
      }
    }
    return false;
  };

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(`http://localhost:3000/api/locations`);
        const cleaned = await response.json();

        setLocations(cleaned);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (isLoading) {
    return (
      <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg>
    );
  }

  if (error) {
    return (
      <div className="">Something went wrong! Please refresh the page.</div>
    );
  }

  return (
    <>
      {/* gif background */}
      <div
        className={`w-full flex flex-col bg-sky-500 h-screen bg-[url('/tokyo.gif')] bg-no-repeat bg-cover`}
      >
        {/* hold profile top left */}
        <div className="flex items-center p-5 h-fit">
          <img
            className="w-10 h-10 rounded-full object-cover hover:cursor-pointer"
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          ></img>
          <IconCaretDownFilled
            style={{ color: "white" }}
            className="hover:cursor-pointer"
          />
        </div>
        {/* holds title and right sign in */}
        <div className="flex xs:flex-col lg:flex-row items-center justify-evenly h-screen p-5 w-full ">
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
            <button className="border rounded-lg shadow-sm px-3 py-2 text-red-600 font-bold border-red-600 hover:bg-red-600 hover:text-white">
              Filters
            </button>
            <form onSubmit={handleSearch}>
              <input
                type="text"
                ref={filterRef}
                placeholder="Search or filter..."
                value={search}
                className="font-bold border border-gray-300 rounded-full shadow-sm px-3 py-3 my-5 focus:outline-none focus:border-red-300 focus:ring-2 focus:ring-red-300 hover:bg-gray-100 flex"
                onChange={handleSearch}
              ></input>
            </form>
            <button
              className="flex items-center absolute left-[340px] bg-red-600 rounded-full p-1"
              onClick={focusFilter}
            >
              <IconPlus className="" color="white" />
            </button>
          </div>

          {/* view buttons */}
          <div className="sm:flex items-center mr-16 space-x-4 [&>*]:py-2 [&>*]:px-8 [&>*]:font-bold xs:hidden">
            <button className="border border-gray-300 rounded-xl shadow-sm px-3 my-5 focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-600 hover:bg-gray-100">
              Grid View
            </button>
            <button className="border border-gray-300 rounded-xl shadow-sm px-3 my-5 focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-600 hover:bg-gray-100">
              Sort by
            </button>
          </div>
        </div>

        {/* filter buttons */}
        {/* [&>*]:text-gray-400 [&>*]:py-2 [&>*]:px-3 [&>*]:font-bold space-x-4 ml-16 xs:ml-8 flex [&>*]:flex-shrink-0 overflow-x-auto */}

        <div className="[&>*]:py-2 [&>*]:px-3 [&>*]:font-bold space-x-4 ml-16 xs:ml-8 flex [&>*]:flex-shrink-0 overflow-x-auto">
          {filterButtons.map((button) => {
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
                onClick={() => handleSearchContinent(button.name)}
              >
                {button.icon}
                {button.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* main grid section */}
      <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7  place-items-center mx-8 gap-y-4 min-h-96">
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
          .map((location) => {
            return (
              <CountryCard
                key={location.city + location.country}
                handleModal={() => {
                  setVisibleModal(true);
                  setCurrentLocation(location);
                }}
                info={location}
              />
            );
          })}
      </div>

      {locations.map((location) => {
        return (
          <CountryModal
            key={location.city + location.country}
            visible={visibleModal}
            onClose={handleClose}
            info={currentLocation}
          />
        );
      })}
    </>
  );
}

export default App;
