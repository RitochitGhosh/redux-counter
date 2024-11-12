import React from "react";
import { useDispatch } from "react-redux";
import { decrement } from "../features/CounterSlice";

const Decrement = () => {
  const dispatch = useDispatch();

  const decrementHandler = () => {
    dispatch(decrement());
  };
  return <button onClick={decrementHandler} className="px-8 py-3 bg-black rounded-md text-white text-xl font-semibold ">Decrement</button>;
};

export default Decrement;
