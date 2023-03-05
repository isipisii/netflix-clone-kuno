import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Navbar from './components/Navbar'
import MoviePage from './pages/MoviePage'
import Watchlist from './pages/Watchlist'
import GenrePage from './pages/GenrePage'
import ResultPage from './pages/ResultPage'
import TvShowsPage from './pages/TvShowsPage'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shows' element={<TvShowsPage />} />
        <Route path='/movie/:id' element={<MoviePage />}/>
        <Route path='/watchlist' element={<Watchlist />} />
        <Route path='/genre/:id/:genre' element={<GenrePage/>} />
        <Route path='/result/:search_term' element={<ResultPage />} />
      </Routes>
    </>
  )
}

export default App