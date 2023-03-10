import { createContext, useState } from "react";
import axios from "axios";

const ApiContext = createContext();

const Context = ({ children }) => {
  const VITE_MOVIE_API_KEY = import.meta.env.VITE_MOVIE_API_KEY;
  const [movies, setMovies] = useState([]);
  const [movieDetail, setMovieDetail] = useState();
  const IMG_BASE_URL = "https://image.tmdb.org/t/p/original";
  const [casts, setCasts] = useState([]);
  const [director, setDirector] = useState("");
  const [directorProfile, setDirectorProfile] = useState("");
  const [movieTrailers, setMovieTrailers] = useState([]);
  const [watchList, setWatchList] = useState([]);
  const [filteredGenreMovies, setFilteredGenreMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [tvShowDetail, setTvShowDetail] = useState();
  const [tvShows, setTvShows] = useState([]);

  // const trailerKey = movieTrailers
  // .filter((trailer) => trailer?.type === "Trailer")
  // .map((trailer) => trailer?.key)[0];

  function addToWatchList(movie) {
    if (watchList.length === 0) {
      setWatchList((prevWatchList) => [...prevWatchList, movie]);
    } else {
      // check if the movie already exists in the watchList
      const movieExists = watchList.some(item => item?.id === movie?.id);
      if (movieExists) {
        alert("You've already added this movie to the watchlist");
      } else {
        setWatchList((prevWatchList) => [...prevWatchList, movie]);
      }
    }
  }

  // 
  // function checkIfShowOrMovieExisted(movie) {
  //   if (watchList.length === 0) {
  //     addToWatchList(movie);
  //   } else {
  //     // check if the movie already exists in the watchList
  //     const movieExists = watchList.some(item => item?.id === movie?.id);
  //     if (movieExists) {
  //       alert("You've already added this movie to the watchlist");
  //     } else {
  //       addToWatchList(movie);
  //     }
  //   }
  // }
  
  //delete movie function for watchlist page
  function deleteMovie(id) {
    const latestWatchList = watchList.filter((movie) => movie?.id !== id);
    setWatchList(latestWatchList);
  }

  //for main movie/ featured movie
  async function getMovies(url) {
    try {
      const response = await axios.get(url);
      setMovies(response.data.results);
    } catch (error) {
      console.error(error);
    }
  }

  //for getting the movie details when movie card is clicked
  async function fetchMovieDetails(id) {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${VITE_MOVIE_API_KEY}&language=en-US`
      );
      setMovieDetail(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  //for casts
  async function fetchCasts(id) {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${VITE_MOVIE_API_KEY}`
      );
      setCasts(response.data.cast);
    } catch (error) {
      console.error(error);
    }
  }

  //for fetching the movie's director
  async function fetchDirector(id) {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${VITE_MOVIE_API_KEY}`
      );
      const data = response.data;
      const director = data?.crew.find((member) => member?.job === "Director");
      if (director) {
        setDirector(director?.name);
        setDirectorProfile(director?.profile_path);
        // console.log(`The director of the movie is ${director?.name}.`)
      } else {
        console.log("No director found for this movie.");
      }
    } catch (error) {
      console.error(error);
    }
  }

  //for movie key
  async function fetchMovieUrl(id) {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${VITE_MOVIE_API_KEY}`
      );
      setMovieTrailers(response.data.results);
    } catch (error) {
      console.error(error);
    }
  }

  // for fetching the list of movie base on genre
  async function fetchFilteredGenreMovies(id) {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${VITE_MOVIE_API_KEY}&with_genres=${id}`
      );
      const moviesWithLiked = response.data.results.map((movie) => {
        return {
          ...movie,
          liked: false,
        };
      });
      setFilteredGenreMovies(moviesWithLiked);
    } catch (error) {
      console.error(error);
    }
  }

  // for finding the official trailer url by filtering and mapping
  const trailerKey = movieTrailers
    .filter((trailer) => trailer?.type === "Trailer")
    .map((trailer) => trailer?.key)[0];

  function truncateString(str, num) {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else return str;
  }

  //for slider
  function slideLeft(id) {
    let slider = document.getElementById(id);
    slider.scrollLeft -= 500;
  }

  function slideRight(id) {
    let slider = document.getElementById(id);
    slider.scrollLeft += 500;
  }

  // for fetching the movies from searchterm
  async function fetchSearchedMovies(search) {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${VITE_MOVIE_API_KEY}&query=${search}`
      );
      setSearchResults(response.data.results);
      console.log(search);
    } catch (error) {
      console.error(error);
    }
  }

  // tv show detailss for tv show page
  async function fetchTvShowDetails(id) {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/tv/${id}?api_key=${VITE_MOVIE_API_KEY}&language=en-US`
      );
      setTvShowDetail(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  //for fetching tv shows
  async function fetchTvShows(url) {
    try {
      const response = await axios.get(url);
      setTvShows(response.data.results);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <ApiContext.Provider
      value={{
        movies,
        slideLeft,
        slideRight,
        setLoading,
        loading,
        movieDetail,
        fetchMovieDetails,
        getMovies,
        truncateString,
        IMG_BASE_URL,

        fetchCasts,
        fetchDirector,
        director,
        casts,
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
        fetchSearchedMovies,

        fetchTvShowDetails,
        tvShowDetail,

        fetchTvShows,
        tvShows,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export { Context, ApiContext };
