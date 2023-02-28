import { useParams } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { ApiContext } from "../context/Context"

import Casts from './components/Casts'
import Director from './components/Director'
import MovieTrailer from './components/MovieTrailer'
import Loader from './components/Loader'

const MoviePage = () => {
  const [loading, setLoading] = useState(false)
  const { movieDetail, fetchMovieDetails, IMG_BASE_URL, fetchCasts, casts, truncateString, 
  fetchDirector, director, directorProfile, trailerKey, fetchMovieUrl, addToWatchList } = useContext(ApiContext)
  const { id } = useParams()

  useEffect(() => {
    async function fetchMovieData() {
      setLoading(true)
      await fetchMovieDetails(id)
      await fetchCasts(id)
      await fetchDirector(id)
      await fetchMovieUrl(id)
      setLoading(false)
    }
    fetchMovieData()
  }, [id])

  console.log(casts)
  console.log(movieDetail)
  return (
  <> 
    {loading ? 
      <Loader/>
      :
      <> 
      <div >
          <div className="w-full sm:h-[100vh] h-[120vh]">
              <div className="w-full h-full relative">
                {/*-----------BACK DROP---------*/}
                <div className="absolute w-full h-full bg-gradient-to-r from-black"></div>
                <img className="w-full h-full object-cover" 
                  src={`${IMG_BASE_URL}${movieDetail?.backdrop_path}`} 
                  alt={movieDetail?.title} 
                />
                <div className="absolute inset-x-0 bottom-0 h-[7rem] bg-gradient-to-t from-[#000] via-[#000000c2] to-transparent"></div>

                {/*--------MOVIE DETAILS---------*/}
                <div className="w-full h-full absolute inset-0 flex items-center justify-center">

                  <div className="w-full  p-4 md:p-8">
                    <h1 className="text-[2.8rem] md:text-[4rem] font-bold text-white drop-shadow-[100px] shadow-black">{movieDetail?.title}</h1>
                    <div>
                      <button className="border text-[.9rem] md:text-[1rem] bg-red-600 py-2 px-5 md:px-8 border-red-600 text-white">Play</button>
                      <button 
                        className="border text-[.9rem] md:text-[1rem] py-2
                        px-5 md:px-8 border-gray-300 text-white 
                        ml-4 hover:bg-[#ffffff2c] backdrop-blur-lg"
                        onClick={() => {addToWatchList(movieDetail), console.log("clicked")}}
                      >
                        Watch Later
                      </button>
                    </div>
                    <p className="text-[#ffffff9f] mt-4">Released: {movieDetail?.release_date}  •  {movieDetail?.runtime} minutes</p>
                    <p className="w-full text-[.9rem] md:text-[1rem] sm:max-w-[70%] md:max-w-[75%] lg:max-w-[65%] xl:max-w-[55%] text-white drop-shadow-[100px] shadow-black">{truncateString(movieDetail?.overview, 150)}</p>

                    {/* -----------GENRE------------- */}
                    <div className="flex md:w-full w-[80%] flex-start items-center gap-[1rem] flex-wrap mt-4">
                      {movieDetail?.genres.map((genre, index) => (
                        <div key={index}>
                          <p className="text-white backdrop-blur-lg px-2 py-1 border-[1px] text-[.9rem] md:text-[1rem] border-white hover:bg-[#ffffff2c]">{genre.name}</p>
                        </div>
                      ))}
                    </div>
                  
                  </div>  
                </div>
              </div>
            </div>
          </div>
          
          {/* -------MOVIE TRAILER------- */}
          <div>
          <h2 className="text-white font-medium text-[1.5rem] mb-[1rem] mx-4 md:mx-8 border-l-[10px] pl-2 border-red-600 ">Trailer</h2>
            <MovieTrailer
              trailerKey={trailerKey}
            />
          </div>
          
          {/* OTHER DETAILS */}
          <div className="mt-10 flex">
            <div className="w-[100%] sm:w-[45%]">

              {/*-----------CASTS---------*/}
              <div>
                  <h2 className="text-white font-medium text-[1.5rem] mb-[1rem] mx-4 md:mx-8 border-l-[10px] pl-2 border-red-600 ">Cast</h2>
                  <div className="relative flex items-center overflow-x-auto casts py-2">
                    <div className="flex gap-[1rem]">
                      {casts.map((cast, index) => (
                        <Casts
                          profile={cast?.profile_path}
                          name={cast?.name}
                          character={cast?.character}
                          key={index}
                          IMG_BASE_URL={IMG_BASE_URL}
                        />
                      ))}
                  </div>
                </div>
              </div>
                
              {/* ------DIRECTOR------- */}
              <div className="mt-4 w-full h-auto">
                <Director
                  IMG_BASE_URL={IMG_BASE_URL}
                  directorName={director}
                  directorProfile={directorProfile}
                />
              </div>
            </div>

            {/* TODOOOOOOOOOOOOOOOOOOOOO */}
          </div>  
        <div>    
      </div>
    </>
    }
  </>
  )
}

export default MoviePage
