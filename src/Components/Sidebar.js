import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isToogleMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div className="p-5 shadow-lg sm:col-span-1 overflow-y-auto h-auto">
      <ul>
        <li>Home</li>
        <li>shorts</li>
        <li>Subscriptions</li>
      </ul>

      <h1 className="font-bold pt-5">You</h1>
      <ul>
        <li>History</li>
        <li>Playlists</li>
        <li>Watch Later</li>
        <li>Liked Videos</li>
      </ul>

      <h1 className="font-bold pt-5">Exploer</h1>
      <ul>
        <li>Trending</li>
        <li>Music</li>
        <li>Moives</li>
        <li>Gaming</li>
        <li>Sports</li>
        <li>News</li>
        <li>Shopping</li>
        <li>Live</li>
      </ul>
    </div>
  );
};

export default Sidebar;
