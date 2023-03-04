import { ApiContext } from "../context/Context"
import { useContext, useEffect } from "react"

import MovieCard from './MovieCard'

const SearchResults = ({ searchTerm }) => {
    const { searchResults, IMG_BASE_URL, fetchSearchedMovies } = useContext(ApiContext)
    
    useEffect(() => {
      fetchSearchedMovies(searchTerm)
    }, [searchTerm])

  return (  
    <div>
        {searchResults.map((movie, index) => (
            <MovieCard
                id={movie?.id}
                img={movie?.backdrop_path}
                title={movie?.title}
                IMG_BASE_URL={IMG_BASE_URL}
                key={index}
                voteAvg={movie?.vote_average}
             />
        ))} 
    </div>
  )
}

export default SearchResults