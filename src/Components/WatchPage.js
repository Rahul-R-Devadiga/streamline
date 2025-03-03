import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../Utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const dispatch = useDispatch();

  const [searchParams] = useSearchParams();

  useEffect(() => {
    dispatch(closeMenu());
  });

  return (
    <div className="flex flex-col">
      <div className="m-4 shadow-sm flex ">
        <div>
          <iframe
            width="997"
            height="500"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full">
          <LiveChat />
        </div>
      </div>
      <div className="w-8/12">
        <CommentsContainer />
      </div>
    </div>
  );
};

export default WatchPage;
