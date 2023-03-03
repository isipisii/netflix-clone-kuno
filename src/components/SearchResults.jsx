import { ApiContext } from "../context/Context"
import { useContext } from "react"

import MovieCard from './MovieCard'

const SearchResults = () => {
    const { searchResults, IMG_BASE_URL } = useContext(ApiContext)
    console.log(searchResults)
    
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