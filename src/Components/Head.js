import React, { useEffect, useState } from "react";
import HamMenu from "../Assets/Images/hamMenu.jpg";
import Logo from "../Assets/Images/Logobutton.png";
import User from "../Assets/Images/UserImage.png";
import SeacrhButton from "../Assets/Images/Search-icon.png";
import { toggleMenu } from "../Utils/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { Youtube_Search_API } from "../Utils/constants";
import { cacheResults } from "../Utils/searchSlice";
import { Link } from "react-router-dom";
import SearchVideoContainer from "./SearchVideoContainer";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const [suggestions, setSuggestions] = useState([]);

  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);

  const dispatch = useDispatch();

  const handleClick = (i) => {
    <SearchVideoContainer query={i} />;
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    console.log("API Call - " + searchQuery);
    const data = await fetch(Youtube_Search_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  return (
    <div className="grid grid-flow-col p-4 m-2 shadow-lg">
      <div className="flex col-span-1 ">
        {/* //This is the hamburger menu icon's logic */}
        <img
          onClick={() => toggleMenuHandler()}
          src={HamMenu}
          alt="Menu-Dropdown"
          className="w-8 h-8 cursor-pointer"
        />
        <a href="/">
          <img src={Logo} alt="Youtube-logo" className="w-24 h-8 mx-2" />
        </a>
      </div>
      <div className="col-span-10">
        {/* //The search bar logic */}
        <div>
          <input
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
            className="w-1/2 border border-gray-400 p-2 rounded-l-full"
            type="text"
            placeholder="Search"
          />
          <button className="border border-gray-600 p-2 rounded-r-full">
            🔍
          </button>
        </div>
        {showSuggestions && (
          <div className="absolute px-5 py-2 bg-white w-[37rem] shadow-lg rounded-lg border border-gray-500  ">
            <ul>
              {suggestions.map((s) => {
                return (
                  <li
                    onClick={() => {
                      <SearchVideoContainer query={s} />;
                    }}
                    key={s}
                    className="hover:bg-gray-500"
                  >
                    🔍 {s}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>

      <div className="col-span-1">
        {/* //This is the user image displayed */}
        <img src={User} alt="User-button" className="w-8 h-8" />
      </div>
    </div>
  );
};

export default Head;
