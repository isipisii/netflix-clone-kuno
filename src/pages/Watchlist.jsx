import { ApiContext } from "../context/Context"
import { useContext } from "react"
import { Link } from "react-router-dom"

const Watchlist = () => {
  const { watchList } = useContext(ApiContext)
  const IMG_BASE_URL = "https://image.tmdb.org/t/p/original"

  if (watchList && watchList.length) {
    console.log(watchList)
  } else {
    console.log("watchList is empty")
  }

  return (
    <>
      {watchList ? 
        <div className="flex flex-wrap ">
          <h1>Watchlist</h1>
          <div>
            {watchList.map((movie, index) => (
                <div  className=" w-[250px] sm:w-[270px] inline-block cursor-pointer relative mr-4" key={index}>
                    <div className="absolute w-full h-full bg-gradient-to-l from-[#000000b1]"/>
                    <p className="text-white absolute top-1 right-1 text-[1.1rem] font-bold">{movie?.vote_average}</p>
                    <img className="w-full h-full block" src={`${IMG_BASE_URL}${movie?.poster_path}`} alt={movie?.title} />
                    <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">  
                      <Link to={`/movie/${movie?.id}`}>
                        <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">{movie?.title}</p>
                      </Link>
                    </div>
                  </div>
              ))}
          </div>
        </div>
        :
        <div>
          <h1 className="text-white text-center">There's nothin in here</h1>
        </div>
      }
    </>
  )
}

export default Watchlist