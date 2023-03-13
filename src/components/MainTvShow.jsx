import { useEffect, useContext, useState } from "react";
import { tvShowsRequests } from "../Requests";
import { Link } from "react-router-dom";
import { ApiContext } from "../context/Context";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faCircleInfo} from "@fortawesome/free-solid-svg-icons";

const MainTvShow = () => {
  const { IMG_BASE_URL, fetchTvShows, tvShows, truncateString, addToWatchList} = useContext(ApiContext);
  const [randomTvShow, setRandomTvShow] = useState();

  useEffect(() => {
    if (tvShows && tvShows.length > 0) {
      const newRandomTvShow = tvShows[Math.floor(Math.random() * tvShows.length)];
      setRandomTvShow(newRandomTvShow);
    }
  }, [tvShows]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const date = new Date();
      const hours = date.getHours();

      if (hours === 0 || hours === 12) {
        const newRandomTvShow = tvShows[Math.floor(Math.random() * tvShows.length)];
        setRandomTvShow(newRandomTvShow);
      }
    }, 60 * 1000);

    return () => clearInterval(intervalId);
  }, [tvShows]);

  useEffect(() => {
    async function getTvShows() {
      await fetchTvShows(tvShowsRequests.requestPopular);
    }
    getTvShows();
  }, []);

  console.log(randomTvShow);

  return (
    <>
      <div className="w-full h-[100vh] relative">
        {/*-----------BACK DROP---------*/}
        <div className="absolute w-full h-full bg-gradient-to-r from-[#141414]"></div>
        <img
          className="w-full h-full object-cover"
          src={`${IMG_BASE_URL}${randomTvShow?.backdrop_path}`}
          alt={randomTvShow?.name}
        />
        <div className=" absolute inset-x-0 bottom-0 h-[10rem] bg-gradient-to-t from-[#141414] via-[#141414a1] to-transparent"></div>

        {/*--------MOVIE DETAILS---------*/}
        <div className="w-full h-full absolute inset-0 flex items-center justify-center">
          <div className="absolute w-full top-[25%] p-4 md:p-8">
            <h1 className="text-[2rem] md:text-[2.9rem] font-bold text-white drop-shadow-[100px] shadow-black">
              {randomTvShow?.name}
            </h1>
            <div>
              <button className="border text-[.9rem] md:text-[1rem] bg-red-600 py-2 px-5 md:px-8 border-red-600 text-white">
                <FontAwesomeIcon icon={faPlay} className="mr-2 text-[1.1rem]" />{" "}
                Play
              </button>
              <button
                className="border text-[.9rem] md:text-[1rem] py-2 
                px-5 md:px-8 border-gray-300 text-white ml-4 
                hover:bg-[#ffffff2c] backdrop-blur-lg"
                onClick={() => addToWatchList(randomTvShow)}
              > 
                Watch Later
              </button>
            </div>
            <div className="w-[70%] md:w-[60%]">
              <p className="text-[#ffffff76] mt-4 ">
                Aired since: {randomTvShow?.first_air_date}
              </p>
              <p className="w-full text-[.9rem] md:text-[1rem] sm:max-w-[70%] md:max-w-[75%] lg:max-w-[65%] xl:max-w-[55%] text-white drop-shadow-[100px] shadow-black">
                {truncateString(randomTvShow?.overview, 150)}
              </p>
            </div>
            <Link to={`/show/${randomTvShow?.id}`}>
              <p className="text-white backdrop-blur-lg flex hover:bg-[#ffffff2c] items-center justify-center text-[.9rem] py-[.4rem] sm:py-2 px-3 md:text-[1rem] sm:w-[150px] w-[140px] border-[1px] mt-[1rem] border-white">
                <FontAwesomeIcon
                  icon={faCircleInfo}
                  className="mr-2 text-[1.1rem]"
                />{" "}
                More Details
              </p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainTvShow;
