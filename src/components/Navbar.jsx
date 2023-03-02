import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ApiContext } from '../context/Context'

const NavBar = () => {
  const { setSearchTerm, searchResults, fetchSearchedMovies, searchTerm} = useContext(ApiContext)

  console.log(searchResults)
  return (
    <nav className='flex items-center justify-between p-4 z-10 w-full absolute'>
      <Link to="/">
        <h1 className="text-red-600 font-bold cursor-pointer text-[2rem]">Netflix</h1>
      </Link>
      <div className="flex items-center gap-2">

        <form
          onSubmit={e => {
              e.preventDefault()
              fetchSearchedMovies(searchTerm)
              setSearchTerm("")
        }}>
          <input
              type="text"
              placeholder="Search moviee"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>

        <button className='text-white'>Sign up</button>
        <button className='bg-red-600 px-4 py-2 rounded cursor-pointer text-white'>Sign in</button>
        <Link to="/watchlist">
          <p className="text-white">Watchlist</p>
        </Link>
      </div>
    </nav>
  )
}

export default NavBar