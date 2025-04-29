import React from "react";
import Tmovies from "./Tmovies";

const TrendingMovies = ({ movies }) => {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-white">Users Top Searched movies</p>
      <div className="flex flex-wrap gap-5">
        {movies.map((movie, index) => (
          <Tmovies key={index} name={movie.movie_name} number={index} />
        ))}
      </div>
    </div>
  );
};

export default TrendingMovies;
