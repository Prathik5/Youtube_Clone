import React from "react";

const VideoCard = ({ info }) => {
  console.log(info);
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="p-2 m-2 w-72 shadow-lg">
      <img className="rounded-lg" src={thumbnails.high.url} alt="thumbnail" />
      <ul>
        <li className="font-bold">{title}</li>
        <li>{channelTitle}</li>
        {statistics.viewCount / 1000 > 1000 ? (
          <li>{statistics.viewCount / 1000000}M views</li>
        ) : (
          <li>{statistics.viewCount / 1000}k views</li>
        )}
      </ul>
    </div>
  );
};

export default VideoCard;
