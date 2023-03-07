import { tvShowsRequests } from "../Requests"
import TvShowsRow from "./page-components/TvShowsRow"

const TvShowsPage = () => {

  return (
    <>
      <TvShowsRow
         title="Top Rated"
         fetchURL={tvShowsRequests.requestTopRated}
         rowID="11"
       />
      <TvShowsRow
         title="Popular"
         fetchURL={tvShowsRequests.requestPopular}
         rowID="12"
       />
      <TvShowsRow
         title="Airing"
         fetchURL={tvShowsRequests.requestAiring}
         rowID="13"
       />
      <TvShowsRow
         title="On the Air"
         fetchURL={tvShowsRequests.requestOnTheAir}
         rowID="14"
       />
    </>
  )
}

export default TvShowsPage