import { ApiContext } from "../context/Context";
import { useContext, useEffect, useState } from "react";

import Loader from "../pages/page-components/Loader";
import MovieCard from "./MovieCard";

const SearchResults = ({ searchTerm }) => {
  const [loading, setLoading] = useState(false);
  const { searchResults, IMG_BASE_URL, fetchSearchedMoviesAndShows } = useContext(ApiContext);

  useEffect(() => {
    async function getSearchedMovies() {
      setLoading(true);
      await fetchSearchedMoviesAndShows(searchTerm);
      setLoading(false);
    }
    getSearchedMovies();
  }, [searchTerm]);
  console.log(searchResults);
  return loading ? (
    <Loader/>
  ) : ( 
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
          {searchResults.map((item, index) =>
             <MovieCard
                id={item?.id}
                img={item?.poster_path}
                title={item?.title}
                IMG_BASE_URL={IMG_BASE_URL}
                key={index}
                voteAvg={item?.vote_average}
                type={item?.media_type}
              />
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
