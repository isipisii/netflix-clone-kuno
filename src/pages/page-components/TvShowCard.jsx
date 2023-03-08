import { Link } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const MovieCard = ({ setTvShows, liked, id, img, title, IMG_BASE_URL, voteAvg, }) => {

  function likeHandler(id) {
    setTvShows((prevShows) => {
      return prevShows.map((show) => {
        if (show.id === id) {
          return {
            ...show,
            liked: !show.liked,
          };
        } else {
          return show;
        }
      });
    });
  }

  return (
    <div className=" w-[200px] sm:w-[270px] inline-block cursor-pointer relative mr-4 hover:scale-100">
      <div className="absolute w-full h-full bg-gradient-to-l from-[#000000b1]" />
      <p className="text-white absolute top-1 right-1 text-[1.1rem] font-bold">
        {voteAvg}
      </p>
      <img
        className="w-full h-full block"
        src={`${IMG_BASE_URL}${img}`}
        alt={title}
      />
      <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 transition-all duration-200 ease-in-out text-white">
        <Link to={`/show/${id}`}>
          <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center w-full">
            {title}
          </p>
        </Link>
        <p onClick={() => likeHandler(id)}>
          {liked ? (
            <FaHeart className="absolute top-4 left-4 text-gray-300" />
          ) : (
            <FaRegHeart className="absolute top-4 left-4 text-gray-300" />
          )}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
