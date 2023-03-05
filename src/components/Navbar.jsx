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
    <nav className={`flex items-center justify-between py-4 px-4 md:px-8 z-10 w-full transition-all duration-500 ease-in-out fixed ${isActive ? "bg-[#141414]" : "bg-transparent"}`}>
      <div className="flex items-center gap-8">
        <Link to="/">
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="logo" className="w-[80px]"/>
          </Link>
        <div className='flex items-center gap-[1rem]'>
          <Link to="/">
            <p className="text-white">Home</p>
          </Link>
          <Link to="/watchlist">
            <p className="text-white">Watchlist</p>
          </Link>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <SearchBar />
      </div>
    </nav>
  )}

export default NavBar