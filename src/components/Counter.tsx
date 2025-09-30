"use client"

import { useAppSelector, useAppDispatch } from "../lib/hooks";
import { increment, decrement } from "../lib/features/couter/counterSlice";
import ShowCounter from "./ShowCounter";

function Counter() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 rounded-xl shadow-md w-80 text-center">
        <h1 className="text-3xl font-semibold mb-4 text-gray-800">Counter</h1>
             <ShowCounter counter={count} />
        <div className="flex justify-center gap-4">
          <button
            onClick={() => dispatch(increment())}
            className="px-5 py-2 bg-blue-400 text-white rounded-md hover:bg-blue-500 transition"
          >
            Increment
          </button>
          <button
            onClick={() => dispatch(decrement())}
            className="px-5 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition"
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  )
}

export default Counter;
