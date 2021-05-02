import React from "react";
import Navbar from "../../components/shared/Navbar";
import Grading from "../../components/university/Grading";

const UniversityScreen = ({ location }) => {
  return (
    <div>
      <Navbar />
      <section className="flex items-center justify-center text-dark min-h-screen bg-green-50">
        <div className="container px-5">
          <Grading location={location} />
        </div>
      </section>
    </div>
  );
};

export default UniversityScreen;
