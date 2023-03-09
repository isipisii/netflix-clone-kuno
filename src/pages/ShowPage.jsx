import { useParams, Link } from "react-router-dom";
import { useState, useContext, useEffect } from "react";

import { ApiContext } from "../context/Context";

const ShowPage = () => {
  const { tvShowDetail, fetchTvShowDetails, IMG_BASE_URL, truncateString, addToWatchList, } = useContext(ApiContext);

  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    async function getDetails() {
      setLoading(true);
      await fetchTvShowDetails(id);
      setLoading(false);
    }
    getDetails();
  }, []);

  console.log(tvShow);
  return (
    <div>
      <div className="w-full sm:h-[100vh] h-[100vh]">
        <div className="w-full h-full relative">
          {/*-----------BACK DROP---------*/}
          <div className="absolute w-full h-full bg-gradient-to-r from-[#141414]"></div>
          <img
            className="w-full h-full object-cover"
            src={`${IMG_BASE_URL}${tvShowDetail?.backdrop_path}`}
            alt={tvShowDetail?.name}
          />
          <div className=" absolute inset-x-0 bottom-0 h-[10rem] bg-gradient-to-t from-[#141414] via-[#141414a1] to-transparent"></div>

          {/*--------MOVIE DETAILS---------*/}
          <div className="w-full h-full absolute inset-0 flex items-center justify-center">
            <div className="w-full  p-4 md:p-8">
              <h1 className="text-[2rem] md:text-[2.9rem] font-bold text-white drop-shadow-[100px] shadow-black">
                {tvShowDetail?.name}
              </h1>
              <div>
                <button className="border text-[.9rem] md:text-[1rem] bg-red-600 py-2 px-5 md:px-8 border-red-600 text-white">
                  Play
                </button>
                <button
                  className="border text-[.9rem] md:text-[1rem] py-2
                    px-5 md:px-8 border-gray-300 text-white 
                    ml-4 hover:bg-[#ffffff2c] backdrop-blur-lg"
                  onClick={() => {
                    addToWatchList(tvShowDetail), console.log("clicked");
                  }}
                >
                  Watch Later
                </button>
              </div>
              <div className="w-[70%] md:w-[60%]">
                <p className="text-[#ffffff9f] text-[.8rem] sm:text-[1rem] mt-4">
                  Aired since: {tvShowDetail?.first_air_date} •{" "}
                  {tvShow?.episode_run_time} minutes
                </p>
                <p className="w-full text-[.9rem] md:text-[1rem] sm:max-w-[70%] md:max-w-[75%] lg:max-w-[65%] xl:max-w-[55%] text-white drop-shadow-[100px] shadow-black">
                  {truncateString(tvShowDetail?.overview, 150)}
                </p>
              </div>
              {/* -----------GENRE------------- */}
              <div className="flex md:w-full w-[80%] flex-start items-center gap-[1rem] flex-wrap mt-4">
                {tvShowDetail?.genres.map((genre, index) => (
                  <div key={index}>
                    <Link
                      to={`/genre/${genre?.id}/${genre?.name.toLowerCase()}`}
                    >
                      <p className="text-white backdrop-blur-lg px-2 py-1 border-[1px] text-[.9rem] md:text-[1rem] border-white hover:bg-[#ffffff2c]">
                        {genre?.name}
                      </p>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TODOOOOO */}
    </div>
  );
};

export default ShowPage;
