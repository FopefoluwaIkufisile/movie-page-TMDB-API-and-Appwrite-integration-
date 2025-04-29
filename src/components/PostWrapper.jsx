import React from "react";
import MovieCard from "./MovieCard";

const PostWrapper = ({ movies, error }) => {
  return (
    <div className="p-7 mt-10 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {error ? (
        <div>
          <p className="text-white"> {error}</p>
        </div>
      ) : (
        movies.map(
          ({
            title,
            poster_path,
            id,
            release_date,
            original_language,
            vote_count,
          }) => (
            <MovieCard
              name={title}
              imageUrl={poster_path}
              date={release_date}
              language={original_language}
              count={vote_count}
              key={id}
            />
          )
        )
      )}
    </div>
  );
};

export default PostWrapper;
