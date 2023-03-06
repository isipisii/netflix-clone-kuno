import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark} from '@fortawesome/free-solid-svg-icons'

import SearchBar from './SearchBar'

const NavBar = () => {
  const [isActive, setIsActive] = useState(false)
  const [clicked, setClicked] = useState(false)
  const location = useLocation()
  const locationActive = path => location.pathname === path

  useEffect(() => {
    function handleOnScroll(){
      if (window.pageYOffset >= 50){
        setIsActive(true)
      } else {
        setIsActive(false)
      }
    }
    handleOnScroll()
    window.addEventListener('scroll', handleOnScroll) 

    return () => {
      window.removeEventListener('scroll', handleOnScroll)
    }
  }, [])

  return (
    <nav className={`flex items-center justify-between py-4 px-4 md:px-8 z-10 w-full transition-all duration-500 ease-in-out fixed ${isActive ? "bg-[#141414]" : "bg-transparent"}`}>
      <div className="flex items-center gap-12">
        <Link to="/">  
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="logo" className="w-[100px]"/>
        </Link>
        {/* for large screen links */}
        <div className='hidden md:block'>
          <div className='flex items-center gap-[1rem] '>
            <Link to="/" className={`${locationActive('/') ? 'text-white font-bold' : 'text-[#ffffffad]'} text-[.9rem]`}>
              <p>Home</p>
            </Link>
            <Link to="/shows" className={`${locationActive('/shows') ? 'text-white font-bold' : 'text-[#ffffffad]'} text-[.9rem]`}>
              <p>TV Shows</p>
            </Link>
            <Link className='text-[#ffffffad] text-[.9rem]'>
              <p>Movies</p>
            </Link>
            <Link to="/watchlist" className={`${locationActive('/watchlist') ? 'text-white font-bold' : 'text-[#ffffffad]'} text-[.9rem]`}>
              <p>My List</p>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <SearchBar />
      </div>

      {clicked ? 
        <FontAwesomeIcon icon={faXmark} className="sm:hidden text-white text-[1.7rem] z-10" onClick={() => setClicked(false)}/>
          :
        <FontAwesomeIcon icon={faBars} className="sm:hidden text-white text-[1.7rem] z-10" onClick={() => setClicked(true)}/>
      }

      {/* TODOOOO */}
      {/* for mobile screen links */}
      {clicked &&
        <div className="absolute flex items-center justify-center bg-[#141414] top-0 right-0 h-[100vh] w-[200px] px-[3rem]">
          <div className='flex flex-col items-start gap-[2rem]'>
            <Link to="/" className={`${locationActive('/') ? 'text-white font-bold' : 'text-[#ffffffad]'} text-[.9rem]`}>
              <p>Home</p>
            </Link>
            <Link to="/shows" className={`${locationActive('/shows') ? 'text-white font-bold' : 'text-[#ffffffad]'} text-[.9rem]`}>
              <p>TV Shows</p>
            </Link>
            <Link className='text-[#ffffffad] text-[.9rem]'>
              <p>Movies</p>
            </Link>
            <Link to="/watchlist" className={`${locationActive('/watchlist') ? 'text-white font-bold' : 'text-[#ffffffad]'} text-[.9rem]`}>
              <p>My List</p>
            </Link>
          </div>
        </div>
      }
    </nav>
  )
}

export default NavBar