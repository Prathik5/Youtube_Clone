import React, { useEffect, useState } from "react";
import { Youtube_API } from "../Utils/constants";
import VideoCard, { AdVideoCard } from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(Youtube_API);
    const json = await data.json();

    console.log(json);
    setVideos(json?.items);
  };

  return (
    <div className="flex flex-wrap">
      {videos[0] && <AdVideoCard info={videos[25]} />}
      {videos.map((video) => (
        <Link to={"/watch?v=" + video.id}>
          <VideoCard key={video.id} info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
