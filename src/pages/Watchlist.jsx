import { ApiContext } from "../context/Context"
import { useContext } from "react"
import { Link } from "react-router-dom"
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

const Watchlist = () => {
  const { watchList, deleteMovie } = useContext(ApiContext)
  const IMG_BASE_URL = "https://image.tmdb.org/t/p/original"

  function slideLeft(){
    let slider = document.getElementById('slider')
    slider.scrollLeft -= 500
  }

  function slideRight(){
    let slider = document.getElementById('slider')
    slider.scrollLeft += 500
  }


  return (
    <>
      {watchList.length !== 0 && watchList !== null ?
      <div className="py-[6rem]">
        <div>
          <h2 className="text-white font-medium text-[2rem] mb-[1rem] mx-4 md:mx-8  border-l-[10px] pl-2 border-red-600 ">Watchlist</h2>
          <div className="relative flex items-center group">
            <MdChevronLeft
              onClick={slideLeft}
              className='bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
              size={40}
            />

              {/* MOVIE CARD */}
              <div 
                id={'slider'}  
                className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative">  
                {watchList.map((movie, index) => (
                  <div className=" w-[250px] sm:w-[270px] inline-block cursor-pointer relative mr-4" key={index}>
                    <div className="absolute w-full h-full bg-gradient-to-l from-[#000000b1]"/>
                      <p className="text-white absolute top-1 right-1 text-[1.1rem] font-bold">{movie?.vote_average}</p>
                      <img className="w-full h-full block" src={`${IMG_BASE_URL}${movie?.poster_path}`} alt={movie?.title} />
                    <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">  
                      <button className="text-white" onClick={() => deleteMovie(movie?.id)}>Delete</button>
                      <Link to={`/movie/${movie?.id}`}>
                        <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">{movie?.title}</p>
                      </Link>
                    </div>
                  </div>))}
              </div>

            <MdChevronRight
              onClick={slideRight}
              className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
              size={40}
            />
          </div>
        </div>
      </div>
        :
        <div className="w-full h-full px-[1rem] pt-[6rem] ">
          <h2 className="text-white font-medium text-[2rem] mb-[1rem]  border-l-[10px] pl-2 border-red-600 ">Watchlist</h2>
          <div className="w-full h-[60vh] flex items-center justify-center">
            <h3 className="text-[#ffffff8b] text-center">There's no movie yet.</h3>
          </div>
        </div>
      }
    </>
  )
}

export default Watchlist