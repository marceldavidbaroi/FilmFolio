import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export const PageNotFound = () => {
  useEffect(() => {
    document.title = "Page Not Found";
  });
  return (
    <main className="dark:bg-black">
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4">
          <p className="text-7xl text-gray-700 font-bold my-10 dark:text-white">
            404, Oops!
          </p>
        </div>
        <div className="flex justify-center my-4">
          <Link to="/">
            <button className="w64 text-xl text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded px-5 py-2.5 mr-2 mb-2 font font-medium">
              Back to FilmFolio
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
};
