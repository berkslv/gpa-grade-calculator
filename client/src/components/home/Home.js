import React from "react";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();

  return (
    <section className="flex items-center justify-center text-dark h-screen bg-green-50">
      <div className="container px-5">
        
        <div className="rounded-xl bg-white border-gray-200 shadow overflow-hidden p-5 text-center">
          <p className="md:text-xl sm:text-base">Üniversite ortalama hesaplama</p>
          <div className="md:mt-14 sm:mt-10 mt-8">
            <button
              className="button md:text-lg sm:text-base"
              onClick={() => {
                history.push("/universite");
              }}
            >
              Başlayalım
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Home;
