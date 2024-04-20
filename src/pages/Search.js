import React, { useEffect } from "react";
import { Card } from "../components/Card";
import { useFetch } from "../hooks/useFetch";
import { useSearchParams } from "react-router-dom";

export const Search = ({ apiPath }) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");

  const { data: movies } = useFetch(apiPath, queryTerm);

  useEffect(() => {
    document.title = `Search result for ${queryTerm}`;
  });

  return (
    <main className="dark:bg-black">
      <section className="py-7">
        <p className="tex-3xl text-gray-700 dark:text-white">
          {movies.length === 0
            ? "no result found "
            : `Result for '${queryTerm}'`}
        </p>
      </section>
      <div className="max-w-7xl auto py-7	">
        <div className="flex justify-start flex-wrap">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </main>
  );
};
