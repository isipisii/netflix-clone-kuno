import SearchResults from "../components/SearchResults";
import { useParams } from "react-router-dom";

import Footer from "../components/Footer"

const ResultPage = () => {
  const { search_term } = useParams();

  return (
    <>
       <SearchResults searchTerm={search_term} />
    </>
  );
};

export default ResultPage;