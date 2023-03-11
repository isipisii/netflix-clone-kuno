import { ApiContext } from "../context/Context";
import { useContext, useEffect, useState } from "react";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import MovieCard from "./MovieCard";

const SearchResults = ({ searchTerm }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { searchResults, IMG_BASE_URL, fetchSearchedMoviesAndShows } = useContext(ApiContext);

  useEffect(() => {
    async function getSearchedMovies() {
      setIsLoading(true);
      await fetchSearchedMoviesAndShows(searchTerm);
      setIsLoading(false);
    }
    getSearchedMovies();
  }, [searchTerm]);

  return (
    <div>
      <div className="pt-[7rem] md:pt-[6rem] mx-auto max-w-[1400px] md:px-4">
        <h2 className="text-white font-medium text-[2rem] mb-[1rem] mx-4 md:mx-8  border-l-[10px] pl-2 border-red-600 ">
          {searchResults.length === 0
            ? "There's no result for"
            : searchResults.length === 1
            ? "Result for"
            : "Results for"}{" "}
          {searchTerm.charAt(0).toUpperCase() + searchTerm.slice(1)}
        </h2>
        <div className="flex flex-wrap mx-auto w-full gap-4 justify-center">
          {searchResults.map((movie, index) =>
              <MovieCard
                id={movie?.id}
                img={movie?.poster_path}
                title={movie?.title}
                IMG_BASE_URL={IMG_BASE_URL}
                key={index}
                voteAvg={movie?.vote_average}
              />
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
