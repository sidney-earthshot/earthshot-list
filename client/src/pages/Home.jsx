import React, { useState, useRef, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

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
  IconPray,
  IconYoga,
  IconBallAmericanFootball,
  IconBallFootball,
  IconMountain,
  IconRipple,
  IconCurrencyEuro,
  IconCactus,
  IconPyramid,
} from "@tabler/icons-react";

import ".././App.css";

import CountryCard from ".././components/CountryCard";
import CountryModal from ".././components/CountryModal";

import { checkNestedItem } from ".././functions/check";
import { filtersCategories, logos } from ".././constants/constants";

const continentButtons = [
  { name: "East Asia and Pacific", icon: <IconTorii /> },
  { name: "South Asia", icon: <IconYoga /> },
  { name: "North America", icon: <IconBallAmericanFootball /> },
  { name: "Latin America and the Caribbean", icon: <IconBallFootball /> },
  { name: "Sub-Saharan Africa", icon: <IconMountain /> },
  { name: "Europe and Central Asia", icon: <IconCurrencyEuro /> },
  { name: "Middle East and North Africa", icon: <IconPyramid /> },
];

export default function Home() {
  const navigate = useNavigate();

  const { countryName } = useParams();

  const [email, setEmail] = useState("");

  const [search, setSearch] = useState("");
  const [selectedContinents, setSelectedContinents] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const [hasMore, setHasMore] = useState(true);

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

  const handleSearchBar = (e) => {
    e.preventDefault();

    setSearch(e.target.value);
  };

  const handleFilterContinent = (selectedContinent) => {
    setSelectedContinents((prevSelectedContinents) => {
      if (prevSelectedContinents.includes(selectedContinent)) {
        // Remove the continent if it's already selected
        return prevSelectedContinents.filter(
          (continent) => continent !== selectedContinent
        );
      } else {
        // Add the continent if it's not already selected
        return [...prevSelectedContinents, selectedContinent];
      }
    });
  };

  const handleFilterCategories = (
    categoryName,
    categoryValue,
    categoryOperation,
    categoryGroupName
  ) => {
    setSelectedCategories((prevSelectedCategories) => {
      const categoryIndex = prevSelectedCategories.findIndex(
        (category) => category.name === categoryName
      );
      if (categoryIndex > -1) {
        // If the category is already selected, remove it
        return prevSelectedCategories.filter(
          (_, index) => index !== categoryIndex
        );
      } else {
        // Otherwise, add the category
        return [
          ...prevSelectedCategories,
          {
            name: categoryName,
            value: categoryValue,
            operation: categoryOperation,
            category: categoryGroupName,
          },
        ];
      }
    });
  };

  const handleGeneralFilter = (location, operation, value) => {
    if (operation === "equals") {
      return location["Income classification"] === value;
    } else if (operation === "greaterThan") {
      return location["2021 population"] > value;
    } else if (operation === "boolean") {
      return location["LDC"] === value;
    }
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

  const fetchMorePosts = async (numberOfLocations) => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/countries/${numberOfLocations}`
      );
      const cleaned = await response.json();

      // adds onto the locations list

      setLocations((prevItems) => [...prevItems, ...cleaned]);
    } catch (err) {
      setError(err);
    } finally {
    }
  };

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);

      // if URL has country name
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
  }, []);

  // if (error) {
  //   return (
  //     <div className="">Something went wrong! Please refresh the page.</div>
  //   );
  // }

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
            <form onSubmit={handleSearchBar}>
              <input
                type="text"
                ref={filterRef}
                placeholder="Search or filter..."
                value={search}
                className="my-5 flex w-96 rounded-full border border-gray-300 px-3 py-3 font-bold shadow-md hover:bg-gray-100 focus:border-red-300 focus:outline-none focus:ring-2 focus:ring-red-300"
                onChange={handleSearchBar}
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
          {filtersCategories.map((filter) => {
            return (
              <React.Fragment key={`${filter.category}`}>
                <div className="mx-4 flex border-b-2 p-4 text-xl text-white">
                  {filter.category}
                </div>
                <div className="ml-4 mt-4 flex items-center overflow-x-auto pb-4 [&>*]:mx-1 [&>*]:p-2">
                  {filter.filters.map((button) => {
                    const isActive = selectedCategories.some(
                      (selectedCategory) =>
                        selectedCategory.name === button.name &&
                        selectedCategory.value === button.value &&
                        selectedCategory.operation === button.operation
                    );

                    const buttonClasses = `flex-shrink-0 rounded-full border-2 shadow-md ${
                      isActive
                        ? "bg-blue-500 text-white"
                        : "bg-white text-black"
                    }`;
                    return (
                      <button
                        key={button.name}
                        className={buttonClasses}
                        onClick={() =>
                          handleFilterCategories(
                            button.name,
                            button.value,
                            button.operation,
                            filter.category
                          )
                        }
                      >
                        {button.name}
                      </button>
                    );
                  })}
                </div>
              </React.Fragment>
            );
          })}
        </div>

        {/* continent buttons */}
        <div className="mx-8 mb-8 flex space-x-4 overflow-x-auto [&>*]:flex-shrink-0 [&>*]:px-3 [&>*]:py-2 [&>*]:font-bold">
          {continentButtons.map((button) => {
            const isActive = selectedContinents.includes(button.name);
            const buttonClasses = isActive
              ? "border-solid border-red-600 bg-red-600 text-white"
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
          <InfiniteScroll
            dataLength={locations.length}
            hasMore={locations.length >= 218 ? false : true}
            next={fetchMorePosts(locations.length)}
            loader={
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
            }
          >
            <div className="mx-8 mb-8 grid min-h-96 place-items-center gap-y-4 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {locations
                .filter((location) => {
                  // If no continents are selected, show all locations

                  if (selectedContinents.length === 0) {
                    return true;
                  }

                  // Otherwise, only show locations that match one of the selected continents
                  return selectedContinents.includes(location["Region"]);
                })

                .filter((location) => {
                  // If no categories are selected, show all locations

                  if (selectedCategories.length === 0) {
                    return true;
                  }

                  return selectedCategories.every((selectedCategory) => {
                    if (selectedCategory.category === "General") {
                      return handleGeneralFilter(
                        location,
                        selectedCategory.operation,
                        selectedCategory.value
                      );
                    }
                  });
                })

                .filter((location) => {
                  const searchWords = search.toLowerCase().split(" ");

                  return checkNestedItem(location, searchWords);
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
          </InfiniteScroll>

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
