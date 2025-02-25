import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, thumbnails, title } = snippet;

  return (
    <div className="m-4 rounded-lg shadow p-2 w-72 min-h-80">
      <img src={thumbnails.high.url} alt="Thumbmail" />
      <ul>
        <li className="font-bold line-clamp-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export const TopVideoCard = ({ info }) => {
  return (
    <div className="border border-red-500">
      <VideoCard info={info} />
    </div>
  );
};

export default VideoCard;
