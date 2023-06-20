import React from "react";

const VideoCard = ({ info }) => {
  console.log(info);
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails, publishedAt } = snippet;
  return (
    <div className="p-2 m-2 w-72 shadow-lg">
      <img className="rounded-lg" src={thumbnails.high.url} alt="thumbnail" />
      <ul>
        <li className="font-bold">{title}</li>
        <li>{channelTitle}</li>
        {statistics.viewCount / 1000 > 1000 ? (
          <li>{(statistics.viewCount / 1000000).toFixed(1)}M views</li>
        ) : (
          <li>{(statistics.viewCount / 1000).toFixed(0)}k views</li>
        )}
        {/* <li>{(publishedAt)}</li> */}
      </ul>
    </div>
  );
};

export const AdVideoCard = ({ info }) => {
  return (
    <div className="border border-red-500">
      <VideoCard info={info} />
    </div>
  );
};

export default VideoCard;
