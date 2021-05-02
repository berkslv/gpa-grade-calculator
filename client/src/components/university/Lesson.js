import React, { useState, useEffect } from "react";

const Lesson = ({ index, lessons, setLessons, grading }) => {
  const creditList = [
    0.5,
    1,
    1.5,
    2,
    2.5,
    3,
    3.5,
    4,
    4.5,
    5,
    5.5,
    6,
    6.5,
    7,
    7.5,
    8,
    8.5,
    9,
    9.5,
    10,
    10.5,
    11,
    11.5,
    12,
    12.5,
    13,
    13.5,
    14,
    14.5,
    15,
    15.5,
    16,
    16.5,
    17,
    17.5,
    18,
    18.5,
    19,
    19.5,
    20,
    20.5,
    21,
    21.5,
    22,
    22.5,
    23,
    23.5,
    24,
    24.5,
    25,
    25.5,
    26,
    26.5,
    27,
    27.5,
    28,
    28.5,
    29,
    29.5,
    30,
  ];
  const gradingList = grading;
  const [gradingSelect, setGradingSelect] = useState("");
  const [creditSelect, setCreditSelect] = useState("");

  useEffect(() => {
    let objIndex = lessons.findIndex((obj) => obj.key === index);

    if (objIndex > -1) {
      lessons[objIndex].grading = parseFloat(gradingSelect);
      lessons[objIndex].credit = parseFloat(creditSelect);
    } else {
      if (gradingSelect && creditSelect) {
        const data = {
          key: index,
          grading: parseFloat(gradingSelect),
          credit: parseFloat(creditSelect),
        };
        setLessons([...lessons, data]);
      }
    }
  }, [gradingSelect, creditSelect]);

  return (
    <div className="flex justify-center items-center my-5">
      <div className="md:mx-4 md:my-1 sm:mx-2 sm:my-1 mx-1 my-1">
        <div className="">{index + 1}.</div>
      </div>

      <div className="md:mx-4 md:my-1 sm:mx-2 sm:my-1 mx-1 my-1">
        <div className="relative inline-block w-full text-gray-700 z-0">
          <select
            className="py-1 md:pr-12 md:pl-8 sm:pr-10 sm:pl-6 pr-6 pl-4 text-base border rounded-lg w-full appearance-none focus:shadow-outline"
            onChange={(e) => {
              setGradingSelect(e.target.value);
            }}
            required
          >
            <option value="">Not</option>
            {gradingList.map((item, i) => (
              <option key={i} value={item.grade}>
                {item.key}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
              <path
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
                fillRule="evenodd"
              ></path>
            </svg>
          </div>
        </div>
      </div>

      <div className="md:mx-4 md:my-1 sm:mx-2 sm:my-1 mx-1 my-1">
        <div className="relative inline-block w-full text-gray-700 z-0">
          <select
            className="py-1 md:pr-12 md:pl-8 sm:pr-10 sm:pl-6 pr-6 pl-4 text-base border rounded-lg w-full appearance-none focus:shadow-outline"
            onChange={(e) => {
              setCreditSelect(e.target.value);
            }}
            required
          >
            <option value="">Kredi</option>
            {creditList.map((item, i) => (
              <option key={i} value={item}>
                {item}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
              <path
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
                fillRule="evenodd"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lesson;
