import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toogleMenu } from "../Utils/appSlice";
import { YOUTUBE_SEARCH_AUTO_COMPLETE_API } from "../Utils/constants";
import { cacheResult } from "../Utils/searchSlice";

const Head = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCacheSelector = useSelector((store) => store.search);

  const toogleMenuHandler = () => {
    dispatch(toogleMenu());
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCacheSelector[searchQuery]) {
        setSuggestions(searchCacheSelector[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_AUTO_COMPLETE_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(cacheResult({ [searchQuery]: json[1] }));
  };

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg sticky z-50 top-0 bg-white">
      {/* Menu and Logo Section*/}
      <div className="flex col-span-1">
        <img
          onClick={() => toogleMenuHandler()}
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-icon-download-in-svg-png-gif-file-formats--crispy-user-interface-pack-icons-462145.png"
          alt="menu"
          className="h-8 cursor-pointer"
        />

        <a href="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/34/YouTube_logo_%282017%29.png"
            alt="logo"
            className="h-8 mx-2"
          />
        </a>
      </div>

      {/* Seach Section */}
      <div className="col-span-10">
        {/* Input Section */}
        <div>
          <input
            type="text"
            name="searchInput"
            id="#SearchInput"
            className="w-1/2 p-2 px-3 border border-gray-400 rounded-l-full "
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className=" border border-gray-400 rounded-r-full bg-gray-100 bg-[url('https://pixsector.com/cache/e7836840/av6584c34aabb39f00a10.png')] bg-cover bg-center w-16 h-10 p-3 px-5"></button>
        </div>

        {/* Suggestion Section */}
        {showSuggestions && (
          <div className="fixed bg-white p-2 w-[530.737px] border border-gray-200 rounded-2xl">
            <ul>
              {suggestions.map((s) => (
                <li key={s} className="py-2 px-3 hover:bg-gray-100 rounded-2xl">
                  🔍 {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* User Profile Section */}
      <div className="col-span-1">
        <img
          src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png"
          alt="user"
          className="h-8"
        />
      </div>
    </div>
  );
};

export default Head;
