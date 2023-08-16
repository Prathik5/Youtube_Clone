import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../Utils/chatSlice";
import { LiveChat_API } from "../Utils/constants";
import store from "../Utils/Store";
import { generateRandomName, generateRandomMessage } from "../Utils/helper";

const LiveChat = () => {
  const dipatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);

  const [liveMessage, setLiveMessage] = useState();

  const LiveComments = async () => {
    const data = await fetch(LiveChat_API);
    const json = await data.json();
    console.log(json);
  };

  useEffect(() => {
    LiveComments();
    const i = setInterval(() => {
      dipatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomMessage(20),
        })
      );
    }, 1500);
    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className="p-2 ml-2 border border-black w-full h-[600px] bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
          {chatMessages.map((c, i) => (
            <ChatMessage key={i} name={c.name} message={c.message} />
          ))}
        </div>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          dipatch(
            addMessage({
              name: "Prathik Prakash",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
        className=" p-2 ml-2 w-full border "
      >
        <span className="px-1">Live Chat:</span>
        <input
          className="w-80 px-2"
          type="text"
          placeholder="Enter message:"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="bg-red-500 w-11 mx-2">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
