import { useContext, useEffect } from "react"
import { ApiContext } from "../../context/Context"

import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

const TvShowsRow = ({ title, fetchURL, rowID }) => {
  const { getTvShows, tvShows } = useContext(ApiContext)

  useEffect(() => {
    async function getAllTvShows(){
      await getTvShows(fetchURL)
    }

    getAllTvShows()
  }, [])

  console.log(tvShows)

    return (
      <div className='py-2 px-4 md:px-8'>
        <h2 className="text-white text-[1.5rem] font-semibold pb-2">{title}</h2>
        <div className="relative flex items-center group">
          <MdChevronLeft
            onClick={() => slideLeft(`slider${rowID}`)}
            className='bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
            size={40}
          />

          <div 
            id={'slider' + rowID}  
            className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
          > 
          {/* TODOOOO */}               
          </div>

          <MdChevronRight
            onClick={() => slideRight(`slider${rowID}`)}
            className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
            size={40}
          />
        </div>
      </div>
    )
}

export default TvShowsRow