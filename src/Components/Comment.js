import React from "react";
import userImage from "../Assets/Images/UserImage.png";

const Comment = ({ data }) => {
  const { name, comment, reply } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 rounded-sm my-3">
      <div>
        <img className="w-12 h-12" src={userImage} alt="" />
      </div>
      <div className="px-3">
        <p className="font-semibold">{name}</p>
        <p>{comment}</p>
      </div>
    </div>
  );
};

export default Comment;
