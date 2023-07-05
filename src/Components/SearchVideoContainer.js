import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { YOUTUBE_SEARCH_RESULTS_API } from "../Utils/constants";
import SearchResults from "./SearchResults";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";

const SearchVideoContainer = ({ query }) => {
  const [searchRes, setSearchRes] = useState([]);

  useEffect(() => {
    getSearchVideos();
  }, []);

  const getSearchVideos = async () => {
    const data = await fetch(YOUTUBE_SEARCH_RESULTS_API + query);
    const json = await data.json();
    // console.log(json.items);
    setSearchRes(json?.items);
    console.log(searchRes);
  };

  return (
    <div>
      {searchRes.map((search) => (
        <Link to={"/watch?+v=" + searchRes.id}>
          <SearchResults info={search} />
        </Link>
      ))}
    </div>
  );
};

export default SearchVideoContainer;
