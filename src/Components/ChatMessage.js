import React from "react";
import userImage from "../Assets/Images/UserImage.png";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center shadow-sm p-2">
      <img src={userImage} alt="User" className="w-6 h-6" />
      <span className="px-2 font-bold">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
