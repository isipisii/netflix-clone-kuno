const { VITE_MOVIE_API_KEY } = import.meta.env

const requests = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${VITE_MOVIE_API_KEY}&language=en-US&page=1`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${VITE_MOVIE_API_KEY}&language=en-US&page=1`,
    requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${VITE_MOVIE_API_KEY}&language=en-US&page=2`,
    requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=${VITE_MOVIE_API_KEY}&language=en-US&query=horror&page=1&include_adult=false`,  
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${VITE_MOVIE_API_KEY}&language=en-US&page=1`,
  }

  export default requests
