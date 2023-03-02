import { createContext, useState, } from 'react'
import axios from 'axios'


const ApiContext = createContext()

const Context = ({children}) => {
  const { VITE_MOVIE_API_KEY } = import.meta.env
  const [movies, setMovies] = useState([])
  const randomMovie = movies[Math.floor(Math.random() * movies.length)]
  const [movieDetail, setMovieDetail] = useState()
  const IMG_BASE_URL = "https://image.tmdb.org/t/p/original"
  const [casts, setCasts] = useState([])
  const [director, setDirector] = useState("")
  const [directorProfile, setDirectorProfile] = useState("")
  const [movieTrailers, setMovieTrailers] = useState([]) 
  const [watchList, setWatchList] = useState([])
  const [filteredGenreMovies, setFilteredGenreMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [searchResults, setSearchResults] = useState([])
  function addToWatchList(movie){
    setWatchList(prevWatchList => [...prevWatchList, movie])
  }
  
  //delete movie function for watchlist page
  function deleteMovie(id) {
    const latestWatchList = watchList.filter(movie => movie?.id !== id)
    setWatchList(latestWatchList)
  }

  //for main movie/ featured movie
  async function getMovies(url) {
    try {
      const response = await axios.get(url)
      setMovies(response.data.results)
    } catch (error) {
      console.error(error)
    }
  }

  //for getting the movie details when movie card is clicked
  async function fetchMovieDetails(id) {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${VITE_MOVIE_API_KEY}&language=en-US`)
      setMovieDetail(response.data)
    } catch (error) {
      console.error(error)
    }
  }
  
  //for casts
  async function fetchCasts(id) {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${VITE_MOVIE_API_KEY}`)
      setCasts(response.data.cast)
    } catch (error) {
      console.error(error)
    }
  }

  //for director
  async function fetchDirector(id) {
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${VITE_MOVIE_API_KEY}`)
    const data = response.data;
    const director = data?.crew.find(member => member?.job === 'Director')
    if (director) {
      setDirector(director?.name)
      setDirectorProfile(director?.profile_path)
      // console.log(`The director of the movie is ${director?.name}.`)
    } else {
      console.log('No director found for this movie.')
    }
  } catch (error) {
    console.error(error)
    }
  } 
  
  //for movie url
  async function fetchMovieUrl(id) {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${VITE_MOVIE_API_KEY}`)
      setMovieTrailers(response.data.results)
    } catch (error) {
      console.error(error)
    }
  }

  // for fetching the list of movie base on genre
  async function fetchFilteredGenreMovies(id){
    try{
      const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${VITE_MOVIE_API_KEY}&with_genres=${id}`) 
      const moviesWithLiked = response.data.results.map(movie => {
        return {
          ...movie,
          liked: false
        }
      })
      setFilteredGenreMovies(moviesWithLiked)
    } catch (error) {
      console.error(error)
    }
  }

  // for finding the official trailer url by filtering and mapping
  const trailerKey = movieTrailers 
    .filter((trailer) => trailer?.type === 'Trailer')
    .map((trailer) => trailer?.key)[0]

  function truncateString(str, num ){
    if(str?.length > num){
        return str.slice(0, num) + '...'
    } else return str
  }

  //for slider
  function slideLeft(id){
    let slider = document.getElementById(id)
    slider.scrollLeft -= 500
  }

  function slideRight(id){
    let slider = document.getElementById(id)
    slider.scrollLeft += 500
  }

// for fetching the movies from searchterm
  async function fetchSearchedMovies(search) {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${VITE_MOVIE_API_KEY}&query=${search}`
      )
      if (response.data && response.data.results) {
        setSearchResults(response.data.results)
        console.log(search)
      } else {
        console.log("No results found.")
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <ApiContext.Provider
      value={{
        slideLeft,
        slideRight,
        setLoading,
        loading,
        movieDetail,
        fetchMovieDetails,
        randomMovie,
        getMovies,
        truncateString,
        IMG_BASE_URL,
        fetchCasts,
        fetchDirector,
        director,
        casts,
        fetch,
        directorProfile,
        fetchMovieUrl,
        trailerKey,
        addToWatchList,
        watchList,
        deleteMovie,
        fetchFilteredGenreMovies,
        filteredGenreMovies,
        setFilteredGenreMovies,

        setSearchTerm,
        searchTerm,
        searchResults,
        fetchSearchedMovies
      }}
    >
      {children}
    </ApiContext.Provider>
  )
}

export {Context, ApiContext}