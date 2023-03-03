import { useContext } from 'react'
import { ApiContext } from '../context/Context'
import { Link } from 'react-router-dom'

const Search = () => {
    const { setSearchTerm, fetchSearchedMovies, searchTerm } = useContext(ApiContext)
    
  return (
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
            <button 
              type="submit"
            >
              Search
            </button>
    </form>
  )
}

export default Search