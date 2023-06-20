import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../Utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchparams] = useSearchParams();

  console.log(searchparams.get("v"));

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div>
      <div className="px-5 w-">
        <iframe
          width="1200"
          height="600"
          src={"https://www.youtube.com/embed/" + searchparams.get("v")}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
