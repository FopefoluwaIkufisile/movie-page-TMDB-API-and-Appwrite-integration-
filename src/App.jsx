import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import PostWrapper from "./components/PostWrapper";
import { getMovies } from "./api/movie";
import SearchBox from "./components/SearchBox";
import { useDebounce } from "use-debounce";
import Loading from "./components/Loading";
import { getTrendingMovies, updateSearchCount } from "./appwrite";
import TrendingMovies from "./components/TrendingMovies";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [debouncedTerm] = useDebounce(searchTerm, 1000);
  const [trendingMovies, setTrendingMovies] = useState([]);

  const getPopularMovies = async () => {
    try {
      setIsLoading(true);
      const movie = await getMovies(debouncedTerm);
      if (movie.results.length === 0) {
        setError("Movie not found");
      } else {
        setError("");
        setMovies(movie.results);
        if (debouncedTerm && movie.results.length > 0) {
          updateSearchCount(debouncedTerm, movie.results[0]);
        }
      }
    } catch (err) {
      console.log(err);
      setError(`Opps, There is an error `);
    } finally {
      setIsLoading(false);
    }
  };
  const loadTrendingMovies = async () => {
    try {
      const trenMovies = await getTrendingMovies();
      console.log(trenMovies);
      setTrendingMovies(trenMovies);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadTrendingMovies();
  }, []);

  useEffect(() => {
    getPopularMovies();
  }, [debouncedTerm]);

  return (
    <div className=" w-screen h-screen overflow-x-hidden">
      <div className="fixed h-full w-full -z-10 bg-slate-950">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]"></div>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        <NavBar />
        <SearchBox searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        {trendingMovies.length > 0 && <TrendingMovies movies={trendingMovies} />}

        {isLoading ? (
          <Loading />
        ) : error ? (
          <p className="text-white text-3xl">Movie not found</p>
        ) : (
          <PostWrapper movies={movies} error={error} />
        )}
      </div>
    </div>
  );
};

export default App;
