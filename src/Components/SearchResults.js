import React from "react";

const SearchResults = ({ info }) => {
  //   console.log(info);
  const { snippet } = info;
  const { title, thumbnails, description, channelTitle } = snippet;
  return (
    <>
      <div className="flex p-2 m-2">
        <div>
          <img className="w-96 h-64" src={thumbnails.high.url} alt={title} />
        </div>
        <div>
          <div className="font-bold p-2">{title}</div>
          <div className="p-2">{channelTitle}</div>
          <div className="font-light p-2">{description}</div>
        </div>
        <hr />
      </div>
    </>
  );
};

export default SearchResults;
