import React, { useState } from "react";
import Lessons from "./Lessons";

const Count = ({ semester, grading }) => {
  const [count, setCount] = useState(1);
  const [isDoneCount, setIsDoneCount] = useState(false);

  const submitHandler = () => {
    setIsDoneCount(true);
  };

  const changeHandler = (value) => {
    if (value === "") {
      setCount(0);
    } else if (!isNaN(value)) {
      setCount(parseInt(value));
    } else if (isNaN(value)) {
      setCount(0);
    }
  };

  return (
    <div>
      {isDoneCount ? (
        <Lessons semester={semester} grading={grading} count={count} />
      ) : (
        <div className="rounded-xl bg-white border-gray-200 shadow overflow-hidden p-5 text-center">
          <p className="md:text-xl sm:text-base">Ders sayısı</p>
          <div className="md:mt-14 sm:mt-10 mt-8">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                submitHandler();
              }}
            >
              <div className="flex justify-center items-center">
                <div className="m-1">
                  <button
                    type="button"
                    className="bg-yellow-200 text-yellow-900 hover:bg-yellow-300 duration-75 font-medium text-md rounded w-10 h-10"
                    onClick={() => {
                      if (count > 1) {
                        setCount(count - 1);
                      }
                    }}
                  >
                    <span className="text-lg">-</span>
                  </button>
                </div>

                <div className="">
                  <div className="field">
                    <input
                      className="rounded border focus:outline-none focus:border-4 focus:border-blue-300 border-gray-400 w-full h-10 p-3"
                      type="number"
                      required
                      min="1"
                      value={count}
                      onChange={(e) => {
                        changeHandler(e.target.value);
                      }}
                    />
                  </div>
                </div>

                <div className="m-1">
                  <button
                    type="button"
                    className="bg-blue-200 text-blue-900 hover:bg-blue-300 duration-75 font-medium text-md rounded w-10 h-10"
                    onClick={() => {
                      setCount(count + 1);
                    }}
                  >
                    <span className="text-lg">+</span>
                  </button>
                </div>
              </div>
              <div className="md:mt-14 sm:mt-10 mt-8">
                <button className="button">
                  Tamam
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Count;
