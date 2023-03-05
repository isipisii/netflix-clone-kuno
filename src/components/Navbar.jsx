import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import SearchBar from './SearchBar'

const NavBar = () => {
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    function handleOnScroll(){
      if (window.pageYOffset >= 50){
        setIsActive(true)
      } else {
        setIsActive(false)
      }
    }
    handleOnScroll()
    window.addEventListener('scroll', handleOnScroll);

    return () => {
      window.removeEventListener('scroll', handleOnScroll)
    }
  }, [])

  return (
    <nav className={`flex items-center justify-between p-4 z-10 w-full transition-all duration-500 ease-in-out  fixed ${isActive ? "bg-black " : "bg-transparent"}`}>
      <Link to="/">
        <h1 className="text-red-600 font-bold cursor-pointer text-[2rem]">Netflix</h1>
      </Link>
      <div className="flex items-center gap-2">
        <SearchBar />
        <Link to="/watchlist">
          <p className="text-white">Watchlist</p>
        </Link>
      </div>
    </nav>
  )}

export default NavBar