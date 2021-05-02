import React, { useState, useEffect } from "react";
import Lesson from "./Lesson";
import Result from "./Result";

const Lessons = ({ semester, grading, count }) => {
  const [isDoneLessons, setIsDoneLessons] = useState(false);
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    console.log("lessons", lessons);
  }, [lessons]);

  const lessonRender = () => {
    let list = [];
    for (let i = 0; i < count; i++) {
      list.push(i);
    }

    return list.map((item, i) => (
      <Lesson
        key={i}
        index={i}
        grading={grading}
        lessons={lessons}
        setLessons={setLessons}
      />
    ));
  };

  return (
    <div>
      {isDoneLessons ? (
        <Result lessons={lessons} />
      ) : (
        <div className="rounded-xl bg-white border-gray-200 shadow overflow-hidden p-5 text-center my-20">
          <p className="md:text-xl sm:text-base">Not ve kredi seçimi</p>
          <div className="md:mt-14 sm:mt-10 mt-8">
            <form
              onSubmit={(e) => {
                setIsDoneLessons(true);
              }}
            >
              {lessonRender()}

              <div className="md:mt-14 sm:mt-10 mt-8">
                <button
                  type="submit"
                  className="button"
                >
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

export default Lessons;
