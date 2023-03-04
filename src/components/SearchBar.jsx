import { useContext } from 'react';
import { ApiContext } from '../context/Context';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
    const { setSearchTerm, searchTerm } = useContext(ApiContext);
    const navigate = useNavigate()

  return (
    <form
      onSubmit={e => {
          e.preventDefault()
          setSearchTerm("")
          navigate(`/result/${searchTerm}`)
     }}
     className="border border-white w-[60%]"
    >
      <input
          type="text"
          placeholder="Search movie"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="bg-black p-[.5rem] w-[100%] text-white"
      />
      <button onClick={() => navigate(`/result/${searchTerm}`)}>Search</button>
    </form>
  )
}

export default SearchBar;