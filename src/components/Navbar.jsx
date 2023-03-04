import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'

const NavBar = () => (
    <nav className='flex items-center justify-between p-4 z-10 w-full absolute'>
      <Link to="/">
        <h1 className="text-red-600 font-bold cursor-pointer text-[2rem]">Netflix</h1>
      </Link>
      <div className="flex items-center gap-2">
        <SearchBar />
        <Link to="/watchlist">
          <p className="text-white">Watchlist</p>
        </Link>
        {/* <Link to="/result"> 
          <p className='text-white'>Search</p>
        </Link> */}
      </div>
    </nav>
  )

export default NavBar