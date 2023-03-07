import { useContext, useEffect, useState } from "react"
import axios from "axios"
import { ApiContext } from "../../context/Context"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft} from '@fortawesome/free-solid-svg-icons'
import TvShowCard from './TvShowCard'

const TvShowsRow = ({ title, fetchURL, rowID }) => {
  const [tvShows, setTvShows] = useState([])
  const { IMG_BASE_URL, slideLeft, slideRight} = useContext(ApiContext)

  useEffect(() => {
    async function getTvShows(){
      try {
        const response = await axios.get(fetchURL)
        const tvShowsWithLike = response.data.results.map(show => (
          {...show, liked:false}
        ))
        setTvShows(tvShowsWithLike)
      } catch (error) {
        console.error(error)
      }
    }
    getTvShows()
  }, [fetchURL])

  console.log(tvShows)

    return (
      <div className='py-2 px-4 md:px-8'>
        <h2 className="text-white text-[1.5rem] font-semibold pb-2">{title}</h2>
        <div className="relative flex items-center group">
          <div className="absolute inset-x-0 h-full w-[4rem] left-0 bg-gradient-to-r from-[#141414] via-[#141414a1] to-transparent z-[2]"></div>
          <FontAwesomeIcon 
            className='left-0 absolute text-[2.5rem]  text-[#ffffff5b] hover:text-[white] cursor-pointer z-10 hidden group-hover:block'
            icon={faChevronLeft}
            onClick={() => slideLeft(`slider${rowID}`)}
          />

          <div 
            id={'slider' + rowID}  
            className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
          > 
          {/* TODOOOO */}
            {tvShows.map((tvShow, index) => (
              <TvShowCard
                liked={tvShow?.liked}
                id={tvShow?.id}
                img={tvShow?.backdrop_path}
                title={tvShow?.name}
                IMG_BASE_URL={IMG_BASE_URL}
                key={index}
                voteAvg={tvShow?.vote_average}
                setTvShows={setTvShows}
              />
            ))}
          </div>

          <FontAwesomeIcon 
            className='right-0 absolute text-[2.5rem] text-[#ffffff5b] hover:text-[white] cursor-pointer z-10 hidden group-hover:block'
            icon={faChevronRight}
            onClick={() => slideRight(`slider${rowID}`)}
          />
          <div className="absolute h-full w-[4rem] right-0 bg-gradient-to-l from-[#141414] via-[#141414a1] to-transparent z-[2]"></div>
        </div>
      </div>
    )
}

export default TvShowsRow