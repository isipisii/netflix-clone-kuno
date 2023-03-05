import {  useEffect, useState } from 'react'
import { useContext } from 'react'
import axios from 'axios'

import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import MovieCard from './MovieCard'
import { ApiContext } from '../context/Context'

const Row = ({ title, fetchURL, rowID}) => {
  const [movies, setMovies] = useState([])
  const {slideLeft, slideRight, IMG_BASE_URL} = useContext(ApiContext)

  
  useEffect(() => {
    async function getMovies(){
      try {
        const response = await axios.get(fetchURL)
        const moviesWithLiked = response.data.results.map(movie => {
          return {
            ...movie,
            liked: false
          }
        })

        setMovies(moviesWithLiked)
      } catch (error) {
        console.error(error)
      }
    }
    getMovies()
  }, [fetchURL])
  
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
          {movies.map((movie, index) => (
            <MovieCard
              liked={movie.liked}
              setMovies={setMovies}
              id={movie?.id}
              img={movie?.backdrop_path}
              title={movie?.title}
              IMG_BASE_URL={IMG_BASE_URL}
              key={index}
              voteAvg={movie?.vote_average}
            />
          ))} 
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

export default Row