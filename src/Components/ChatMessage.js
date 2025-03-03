import React, { useEffect } from "react";

const ChatMessage = ({ name, message }) => {

  return (
    <div className="flex items-center shadow-sm p-2">
      <img
        src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png"
        alt="user"
        className="h-8"
      />
      <span className="font-bold px-2">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
