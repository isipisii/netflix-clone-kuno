import React from 'react'
import Navbar from './components/Navbar'
import Movie from './pages/Movie'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movie/:id' element={<Movie />}/>
      </Routes>
    </>
  )
}

export default App