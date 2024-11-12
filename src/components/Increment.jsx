import React from "react";
import { useDispatch } from "react-redux";
import { increment } from "../features/CounterSlice";

const Increment = () => {
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(increment());
  };
  return <button onClick={incrementHandler} className="px-8 py-3 bg-black rounded-md text-white text-xl font-semibold ">Increment</button>;
};

export default Increment;
