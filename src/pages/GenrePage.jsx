import { useParams } from "react-router-dom"
import { useContext, useEffect } from "react"
import { ApiContext } from "../context/Context"

import MovieCard from "../components/MovieCard"

const GenrePage = () => {
    const {fetchFilteredGenreMovies, filteredGenreMovies, setFilteredGenreMovies, IMG_BASE_URL, loading, setLoading} = useContext(ApiContext)
    const { id } = useParams()

    useEffect(() => {
        async function getMovies(){
          setLoading(true)
          await fetchFilteredGenreMovies(id)
          setLoading(false)
        }
        getMovies()
    }, [])

    console.log(filteredGenreMovies)

  return (
    <div>
      {filteredGenreMovies.map((movie, index) => (
            <MovieCard
              liked={movie.liked}
              setMovies={setFilteredGenreMovies}
              id={movie?.id}
              img={movie?.poster_path}
              title={movie?.title}
              IMG_BASE_URL={IMG_BASE_URL}
              key={index}
              voteAvg={movie?.vote_average}
            />
          ))} 
    </div>
  )
}

export default GenrePage