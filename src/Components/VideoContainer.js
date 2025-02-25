import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../Utils/constants";
import VideoCard, { TopVideoCard } from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    setVideos(json?.items);
  };

  return (
    <div className="row-span-11 flex flex-wrap gap-4">
      {videos.map((video, index) => (
        <Link to={"watch?v=" + video.id} key={video.id}>
          {video && index < 3 ? (
            <TopVideoCard key={video.id} info={video} />
          ) : (
            <VideoCard key={video.id} info={video} />
          )}
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
