import {  useEffect, useState } from 'react'
import axios from 'axios'

import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import MovieCard from './MovieCard'

const Row = ({ title, fetchURL, rowID}) => {
  const [movies, setMovies] = useState([])
  const IMG_BASE_URL = "https://image.tmdb.org/t/p/original"
  
  useEffect(() => {
    axios.get(fetchURL)
      .then(response => {
        const moviesWithLiked = response.data.results.map(movie => {
          return {
            ...movie,
            liked: false
          }
        })
        setMovies(moviesWithLiked)
      })
  }, [fetchURL])

  function slideLeft(){
    let slider = document.getElementById('slider' + rowID)
    slider.scrollLeft -= 500;
  }

  function slideRight(){
    let slider = document.getElementById('slider' + rowID)
    slider.scrollLeft += 500;
  }

  

  return (
    <>
      <h2 className="text-white text-[1.5rem] font-semibold p-4">{title}</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={slideLeft}
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
          onClick={slideRight}
          className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
          size={40}
        />
      </div>
    </>
  )
}

export default Row