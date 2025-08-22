"use client";

import React, { useState } from "react";

const Counter = ({ onChange }) => {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount((prev) => {
      const newCount = prev + 1;
      onChange?.(newCount);
      return newCount;
    });
  };

  const decrement = () => {
    setCount((prev) => {
      const newCount = prev > 1 ? prev - 1 : 1;
      onChange?.(newCount);
      return newCount;
    });
  };

  return (
    <div className="flex w-fit items-center gap-2 bg-gray-800 text-white rounded-md px-3 py-2">
      <button
        onClick={decrement}
        className="px-2 py-1 bg-gray-700 rounded hover:bg-gray-600"
      >
        -
      </button>
      <span className="text-lg">{count}</span>
      <button
        onClick={increment}
        className="px-2 py-1 bg-gray-700 rounded hover:bg-gray-600"
      >
        +
      </button>
    </div>
  );
};

export default Counter;
