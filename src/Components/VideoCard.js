import React from "react";
import moment from "moment/moment";

const VideoCard = ({ info }) => {
  // console.log(info);
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails, publishedAt } = snippet;
  return (
    <div className="p-2 m-2 w-72 h-80 shadow-lg hover:shadow-2xl">
      <img className="rounded-lg" src={thumbnails.high.url} alt="thumbnail" />
      <ul>
        <li className="font-bold truncate overflow-hidden">{title}</li>
        <li>{channelTitle}</li>
        <div className="flex">
          {statistics.viewCount / 1000 > 1000 ? (
            <li>{(statistics.viewCount / 1000000).toFixed(1)}M views</li>
          ) : (
            <li>{(statistics.viewCount / 1000).toFixed(0)}k views</li>
          )}
          <div className="px-2">&middot;</div>
          <li>{moment(publishedAt).fromNow()}</li>
        </div>
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
