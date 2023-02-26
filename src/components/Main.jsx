import {  useContext, useEffect } from "react"
import { ApiContext } from "../context/Context"
import { MdArrowRight } from "react-icons/md"
import { Link } from "react-router-dom"
import requests from "../Requests"


const Main = () => {
  const { randomMovie, getMovies, truncateString, IMG_BASE_URL, addToWatchList } = useContext(ApiContext)

  useEffect(() => {
    getMovies(requests.requestPopular)
  },[])
  

  return (
    <div className="w-full h-[100vh]">
      <div className="w-full h-full">
        {/*-----------BACK DROP---------*/}
        <div className="absolute w-full h-full bg-gradient-to-r from-[#000000c9]"></div>
        <img className="w-full h-full object-cover" 
          src={`${IMG_BASE_URL}${randomMovie?.backdrop_path}`} 
          alt={randomMovie?.title} 
        />
        <div className="absolute inset-x-0 bottom-0 h-[7rem] bg-gradient-to-t from-[#000] via-[#000000c2] to-transparent"></div>

        {/*--------MOVIE DETAILS---------*/}
        <div className="w-full h-full absolute inset-0 flex items-center justify-center">
          <div className="absolute w-full top-[25%] p-4 md:p-8">
            <h1 className="text-[2.8rem] md:text-[4rem] font-bold text-white">{randomMovie?.title}</h1>
            <div>
              <button className="border text-[.9rem] md:text-[1rem] bg-red-600 py-2 px-5 md:px-8 border-red-600 text-white">Play</button>
              <button 
                className="border text-[.9rem] md:text-[1rem] py-2 
                px-5 md:px-8 border-gray-300 text-white ml-4 
                hover:bg-[#ffffff2c]"
                onClick={() => addToWatchList(randomMovie)}
              > 
                Watch Later
              </button>
            </div> 
            <p className="text-[#ffffff76] mt-4 ">Released: {randomMovie?.release_date}</p>
            <p className="w-full text-[.9rem] md:text-[1rem] sm:max-w-[70%] md:max-w-[75%] lg:max-w-[65%] xl:max-w-[55%] text-white">{truncateString(randomMovie?.overview, 150)}</p>
            <Link to={`/movie/${randomMovie?.id}`}>
                <p className="text-white flex hover:bg-[#ffffff2c] items-center justify-center text-[.9rem] py-2 px-3 md:text-[1rem] w-[150px] border-[1px] mt-[1rem] border-white">More Details <MdArrowRight className="text-white" size={25}/></p>
            </Link>
          </div>  
        </div>
        
      </div>
    </div>

  )
}

export default Main