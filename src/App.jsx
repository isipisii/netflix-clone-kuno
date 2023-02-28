import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Navbar from './components/Navbar'
import MoviePage from './pages/MoviePage'
import Watchlist from './pages/Watchlist'
import GenrePage from './pages/GenrePage'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movie/:id' element={<MoviePage />}/>
        <Route path='/watchlist' element={<Watchlist />} />
        <Route path='/genre/:id' element={<GenrePage/>} />
      </Routes>
    </>
  )
}

export default App