import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const Result = ({ lessons }) => {
  const history = useHistory();
  const [result, setResult] = useState(0);
  const [credit, setCredit] = useState(0);

  useEffect(() => {
    calculateResult();
  }, []);

  const calculateResult = () => {
    let preResult = 0;
    let totalCredit = 0;

    console.log("lessons",lessons)

    lessons.forEach((element) => {
      preResult += element.grading * element.credit;
      totalCredit += element.credit;
    });

    setCredit(totalCredit.toFixed(2));
    setResult((preResult / totalCredit).toFixed(2));
  };

  return (
    <div className="rounded-xl bg-white border-gray-200 shadow overflow-hidden p-5 text-center">
      <p className="md:text-xl sm:text-base">Sonuç</p>
      <div className="md:mt-14 sm:mt-10 mt-8">
        
        <div className="md:text-xl sm:text-lg text-lg my-2">
          Not ortalaman &nbsp;
          <span className="font-bold">{result}</span>
        </div>

        <div className="md:text-lg sm:text-base text-base my-2">
          Toplam kredi &nbsp;
          <span className="font-bold">{credit}</span>
        </div>

      </div>
      <div className="md:mt-14 sm:mt-10 mt-8">
        <button
          className="button"
          onClick={() => {
            history.push("/ana-sayfa");
          }}
        >
          Tekrar hesapla
        </button>
      </div>
    </div>
  );
};

export default Result;
