import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addmessage } from "../Utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../Utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessage = useSelector((store) => store.chat.message);

  useEffect(() => {
    const i = setInterval(() => {
      //API Polling

      dispatch(
        addmessage({
          name: generateRandomName(),
          message: makeRandomMessage(20),
        })
      );
    }, 1500);

    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className="p-2 border border-black w-full h-[500px] ml-2 overflow-y-scroll flex flex-col-reverse">
        {chatMessage.map((c, index) => (
          <ChatMessage key={index} name={c.name} message={c.message} />
        ))}
      </div>

      <form
        className="w-full p-2 ml-2"
        onSubmit={(e) => {
          e.preventDefault();
          console.log("on Form Submit", liveMessage);
          dispatch(
            addmessage({
              name: "Rahul",
              message: liveMessage,
            })
          );
          setLiveMessage("")
        }}
      >
        <input
          type="text"
          name="chat"
          id="#chat"
          className=" border border-black w-96 px-2"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button type="submit" className="bg-green-400 px-2 mx-2 rounded-lg">
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
