import React from "react";
import { Link } from "react-router-dom";

const NotFoundScreen = () => {
  return (
    <section className="flex bg-yellow-50 w-100 min-h-screen">
      <div className="flex-box px-4 text-center m-auto">
        <p className="text-4xl font-bold font-sans tracking-wider text-yellow-700">404?</p>
        <p className="text-lg my-5">
          {window.location.href}
        </p>
        <p className="text-lg my-5">
          Üzgünüm, böyle bir sayfa yok. Başka bir şeyler mi arıyordun?
        </p>
        <Link to="/ana-sayfa" className="rounded-md shadow-md hover:bg-yellow-300 bg-yellow-200 p-3">
          Ana sayfaya dön
        </Link>
      </div>
    </section>
  );
};

export default NotFoundScreen;
