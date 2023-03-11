import { ApiContext } from "../context/Context";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft, } from "@fortawesome/free-solid-svg-icons";

const Watchlist = () => {
  const { watchList, deleteMovie, slideLeft, slideRight, IMG_BASE_URL} = useContext(ApiContext);
  console.log(watchList);
  
  return (
    <>
      {watchList.length !== 0  ? (
        <div className="pt-[6rem] ">
          <div className="py-4 px-4 md:px-8">
            <h2 className="text-white font-medium text-[2rem] mb-[1rem] border-l-[10px] pl-2 border-red-600 ">
              My List
            </h2>
            <div className="relative h-full flex items-center group">
              <div className="absolute inset-x-0 h-full w-[2rem] left-0 bg-gradient-to-r from-[#141414] via-[#141414a1] to-transparent z-[2]"></div>
              <FontAwesomeIcon
                className="left-0 absolute text-[2.5rem]  text-[#ffffff5b] hover:text-[white] cursor-pointer z-10 hidden group-hover:block"
                icon={faChevronLeft}
                onClick={() => slideLeft("slider")}
              />

              {/* MOVIE CARD */}
              <div
                id={"slider"}
                className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
              >
                {watchList.map((movie, index) => (
                  <div
                    className=" w-[250px] sm:w-[270px] overflow-y-hidden inline-block cursor-pointer relative mr-4"
                    key={index}
                  >
                    <div className="absolute w-full h-full bg-gradient-to-l from-[#000000b1]" />
                    <p className="text-white absolute top-1 right-1 text-[1.1rem] font-bold">
                      {movie?.vote_average}
                    </p>
                    <img
                      className="w-full h-full block"
                      src={`${IMG_BASE_URL}${movie?.poster_path}`}
                      alt={movie?.title}
                    />
                    <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
                      <button
                        className="text-white"
                        onClick={() => deleteMovie(movie?.id)}
                      >
                        Delete
                      </button>
                      <Link to={`/movie/${movie?.id}`}>
                        <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
                          {movie?.title}
                        </p>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              <FontAwesomeIcon
                className="right-0 absolute text-[2.5rem] text-[#ffffff5b] hover:text-[white] cursor-pointer z-10 hidden group-hover:block"
                icon={faChevronRight}
                onClick={() => slideRight("slider")}
              />
              <div className="absolute h-full w-[2rem] right-0 bg-gradient-to-l from-[#141414] via-[#141414a1] to-transparent z-[2]"></div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full h-full py-4 px-4 md:px-8 pt-[6rem] ">
          <h2 className="text-white font-medium text-[2rem] mb-[1rem]  border-l-[10px] pl-2 border-red-600 ">
            My List
          </h2>
          <div className="w-full h-[60vh] flex items-center justify-center">
            <h3 className="text-[#ffffff8b] text-center sm:[.9rem]">
              There's no movie yet.
            </h3>
          </div>
        </div>
      )}
    </>
  );
};

export default Watchlist;
