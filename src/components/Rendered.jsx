import React from "react";
import { useSelector } from "react-redux";

const Rendered = () => {
  const counter = useSelector((state) => state.counter.counter);

  return (
    <div className="flex justify-center items-center">
      <h2 className="text-9xl font-bold text-gray-700  hover:text-black ease-out">{counter}</h2>
    </div>
  );
};

export default Rendered;
