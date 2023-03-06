import { tvShowsRequests } from "../Requests"
import TvShowsRow from "./page-components/TvShowsRow"

const TvShowsPage = () => {

  return (
    <>
      <TvShowsRow
         title="Top Rated"
         fetchURL={tvShowsRequests.requestTopRated}
         rowID="1"
       />
      <TvShowsRow
         title="Popular"
         fetchURL={tvShowsRequests.requestPopular}
         rowID="2"
       />
      <TvShowsRow
         title="Airing"
         fetchURL={tvShowsRequests.requestAiring}
         rowID="3"
       />
      <TvShowsRow
         title="On the Air"
         fetchURL={tvShowsRequests.requestOnTheAir}
         rowID="4"
       />
    </>
  )
}

export default TvShowsPage