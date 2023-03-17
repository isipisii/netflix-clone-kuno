import { useRef } from "react";
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {
  const navigate = useNavigate();
  const inputRef = useRef(null);

  function handleSearch(e){
    e.preventDefault();
    let searchTerm = inputRef.current.value
    navigate(`/result/${searchTerm}`);
    searchTerm = "";
  }

  return (
    <form
      onSubmit={handleSearch}
      className="flex w-[100%] border border-[#5a5454] bg-[#000000a7]"
    >
      <input
        type="text"
        placeholder="Search"
        ref={inputRef}
        // value={searchTerm}
        // onChange={(e) => setSearchTerm(e.target.value)}
        className="bg-[#1a1a1a88] p-[.5rem] w-[100%] text-white border-r border-[#5a5454] outline-none"
      />
      <button
        className="text-white px-2 "
        onClick={handleSearch}
      >
        <FontAwesomeIcon icon={faMagnifyingGlass} className="text-[1.4rem]" />
      </button>
    </form>
  );
};

export default SearchBar;
