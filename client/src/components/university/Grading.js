import React, { useState } from "react";
import { types } from "../../constants";
import Count from "./Count";

const Grading = () => {
  const [grading, setGrading] = useState("");
  const [isDoneGrading, setIsDoneGrading] = useState(false);

  const clickHandler = () => {
    setIsDoneGrading(true);
  };

  return (
    <div>
      {isDoneGrading ? (
        <Count grading={grading} />
      ) : (
        <div className="rounded-xl bg-white border-gray-200 shadow overflow-hidden p-5 text-center">
          <p className="md:text-xl sm:text-base">Kredi çeşidi</p>
          <div className="md:mt-14 sm:mt-10 mt-8">
            <div className="my-2">
              <button
                onClick={() => {
                  setGrading(types.CREDIT_TYPE_1);
                  clickHandler();
                }}
                className="button md:text-base sm:text-sm text-sm"
              >
                  AA, BA, BB, CB, CC, DC, DD, FD, FF
              </button>
            </div>
            <div className="my-2">
              <button
                onClick={() => {
                  setGrading(types.CREDIT_TYPE_2);
                  clickHandler();
                }}
                className="button md:text-base sm:text-sm text-sm"
              >
                A, A-, B+, B, B-, C+, C, C-, D+, D, F
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Grading;
