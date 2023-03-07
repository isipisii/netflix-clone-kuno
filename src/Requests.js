
const VITE_MOVIE_API_KEY = import.meta.env.VITE_MOVIE_API_KEY

const requests = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${VITE_MOVIE_API_KEY}&language=en-US&page=1`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${VITE_MOVIE_API_KEY}&language=en-US&page=1`,
    requestTrending: `https://api.themoviedb.org/3/trending/all/day?api_key=${VITE_MOVIE_API_KEY}`,
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${VITE_MOVIE_API_KEY}&language=en-US&page=1`,
  }

const tvShowsRequests = {
    requestTopRated: `https://api.themoviedb.org/3/tv/top_rated?api_key=${VITE_MOVIE_API_KEY}&language=en-US&page=2`,
    requestPopular: `https://api.themoviedb.org/3/tv/popular?api_key=${VITE_MOVIE_API_KEY}&language=en-US&page=1`,
    requestAiring: `https://api.themoviedb.org/3/tv/airing_today?api_key=${VITE_MOVIE_API_KEY}&language=en-US&page=1`,
    requestOnTheAir:`https://api.themoviedb.org/3/tv/on_the_air?api_key=${VITE_MOVIE_API_KEY}&language=en-US&page=1`
}
  
export { requests, tvShowsRequests, }
