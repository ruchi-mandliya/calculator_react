import React from "react";

function Calculator() {
  return (
    <div className="bg-blue-900 text-white w-screen h-screen flex justify-center items-center">
      <div className=" bg-gray-900 w-96 rounded-xl shadow-xl border-2 border-gray-50">
        {/* Screen  */}
        <div className="p-10 ">
          <input
            type="text"
            className="px-1.5 text-right placeholder-black outline-none rounded-lg bg-gray-400 text-2xl pt-20 w-full text-black"
            placeholder="0"
          />
        </div>

        {/* Keyboard  */}
        <div className="keyboard">
          <div className="m-5 flex justify-between">
            <input
              type="button"
              value="C"
              className="bg-red-500 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"
            />
            <input
              type="button"
              value="del"
              className="bg-green-500 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"
            />
            <input
              type="button"
              value="%"
              className="bg-blue-500 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"
            />
            <input
              type="button"
              value="/"
              className="bg-orange-300 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"
            />
          </div>

          <div className="m-5 flex justify-between">
            <input
              type="button"
              value="7"
              className="bg-gray-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"
            />
            <input
              type="button"
              value="8"
              className="bg-gray-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"
            />
            <input
              type="button"
              value="9"
              className="bg-gray-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"
            />
            <input
              type="button"
              value="*"
              className="bg-pink-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"
            />
          </div>

          <div className="m-5 flex justify-between">
            <input
              type="button"
              value="4"
              className="bg-gray-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"
            />
            <input
              type="button"
              value="5"
              className="bg-gray-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"
            />
            <input
              type="button"
              value="6"
              className="bg-gray-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"
            />
            <input
              type="button"
              value="-"
              className="bg-indigo-300 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"
            />
          </div>

          <div className="m-5 flex justify-between">
            <input
              type="button"
              value="1"
              className="bg-gray-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"
            />
            <input
              type="button"
              value="2"
              className="bg-gray-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"
            />
            <input
              type="button"
              value="3"
              className="bg-gray-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"
            />
            <input
              type="button"
              value="+"
              className="bg-sky-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"
            />
          </div>

          <div className="m-5 flex justify-between">
            <input
              type="button"
              value="0"
              className="bg-gray-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"
            />
            <input
              type="button"
              value="00"
              className="bg-gray-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"
            />
            <input
              type="button"
              value="."
              className="bg-gray-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"
            />
            <input
              type="button"
              value="="
              className="bg-green-300 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
