import { useEffect, useState } from "react";
import { useContext } from "react";
import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft, } from "@fortawesome/free-solid-svg-icons";
import MovieCard from "./MovieCard";
import { ApiContext } from "../context/Context";

const Row = ({ title, fetchURL, rowID }) => {
  const [movies, setMovies] = useState([]);
  const { slideLeft, slideRight, IMG_BASE_URL } = useContext(ApiContext);

  useEffect(() => {
    async function getMovies() {
      try {
        const response = await axios.get(fetchURL);
        const moviesWithLiked = response.data.results.map((movie) => {
          return {
            ...movie,
            liked: false,
          };
        });

        setMovies(moviesWithLiked);
      } catch (error) {
        console.log(error);
      }
    }
    getMovies();
  }, [fetchURL]);

  return (
    <div className="py-2 px-4 md:px-8">
      <h2 className="text-white text-[1.5rem] font-semibold pb-2">{title}</h2>
      <div className="relative h-full flex items-center group">
        <div className="absolute inset-x-0 h-full w-[2rem] left-0 bg-gradient-to-r from-[#141414] via-[#141414a1] to-transparent z-[2]"></div>
        <FontAwesomeIcon
          className="left-0 absolute text-[2.5rem]  text-[#ffffff5b] hover:text-[white] cursor-pointer z-10 hidden group-hover:block"
          icon={faChevronLeft}
          onClick={() => slideLeft(`slider${rowID}`)}
        />

        <div
          id={"slider" + rowID}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {movies.map((movie, index) => (
            <MovieCard
              liked={movie.liked}
              setMovies={setMovies}
              id={movie?.id}
              img={movie?.backdrop_path}
              title={movie?.title}
              IMG_BASE_URL={IMG_BASE_URL}
              key={index}
              voteAvg={movie?.vote_average}
            />
          ))}
        </div>

        <FontAwesomeIcon
          className="right-0 absolute text-[2.5rem] text-[#ffffff5b] hover:text-[white] cursor-pointer z-10 hidden group-hover:block"
          icon={faChevronRight}
          onClick={() => slideRight(`slider${rowID}`)}
        />
        <div className="absolute h-full w-[2rem] right-0 bg-gradient-to-l from-[#141414] via-[#141414a1] to-transparent z-[2]"></div>
      </div>
    </div>
  );
};

export default Row;
