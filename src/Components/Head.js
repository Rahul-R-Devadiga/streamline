import React from "react";
import { useDispatch } from "react-redux";
import { toogleMenu } from "../Utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();

  const toogleMenuHandler = () => {
    dispatch(toogleMenu());
  };

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      
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
      <div className="col-span-10 text-center">
        <input
          type="text"
          name="searchInput"
          id="#SearchInput"
          className="w-1/2 p-2 px-3 border border-gray-400 rounded-l-full "
        />
        <button className=" border border-gray-400 rounded-r-full bg-gray-100 bg-[url('https://pixsector.com/cache/e7836840/av6584c34aabb39f00a10.png')] bg-cover bg-center w-16 h-10 p-3 px-5"></button>
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
