import { useParams } from "react-router-dom"
import { useContext, useEffect } from "react"
import { ApiContext } from "../context/Context"

import MovieCard from "../components/MovieCard"

const GenrePage = () => {
    const {fetchFilteredGenreMovies, filteredGenreMovies, setFilteredGenreMovies, IMG_BASE_URL, loading, setLoading} = useContext(ApiContext)
    const { id, genre } = useParams()

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
      <div className="pt-[6rem] mx-auto max-w-[1400px] px-4">
        <h2 className="text-white font-medium text-[2rem] mb-[1rem] mx-4 md:mx-8  border-l-[10px] pl-2 border-red-600 ">{genre.charAt(0).toUpperCase() + genre.slice(1)}</h2>
        <div className="flex flex-wrap mx-auto w-full gap-8 justify-center ">
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
      </div> 
    </div>
  )
}

export default GenrePage