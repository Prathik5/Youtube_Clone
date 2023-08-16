import React from "react";
import Button from "./Button";

const list = [
  "All",
  "Music",
  "News",
  "Cooking",
  "Games",
  "React",
  "Coding",
  "Soccer",
  "Cricket",
  "Unvoxing",
  "Comedy",
  "Taste",
  "Recently Uploaded",
  "Watched",
];

const ButtonList = () => {
  return (
    <div className="flex">
      {list.map((butt) => (
        <Button key={butt} name={butt} />
      ))}
    </div>
  );
};

export default ButtonList;
