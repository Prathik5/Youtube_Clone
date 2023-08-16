import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button className=" p-2 m-2 h-9 flex align-middle bg-gray-400 border rounded-lg">
        {name}
      </button>
    </div>
  );
};

export default Button;
