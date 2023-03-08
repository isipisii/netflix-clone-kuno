import { useContext } from 'react';
import { ApiContext } from '../context/Context';
import { useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

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
     className="flex w-[100%] border border-[#5a5454] bg-[#000000a7]"
    >
      <input
          type="text"
          placeholder="Search movie"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="bg-[#1a1a1a88] p-[.5rem] w-[100%] text-white border-r border-[#5a5454] outline-none"
      />
        <button className='text-white px-2 ' onClick={() => navigate(`/result/${searchTerm}`)}>
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="text-[1.4rem]"
          />
        </button>
    </form>
  )
}

export default SearchBar;