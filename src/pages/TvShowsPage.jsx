import { tvShowsRequests } from "../Requests";
import { nanoid } from "nanoid";

import TvShowsRow from "./page-components/TvShowsRow";
import MainTvShow from "../components/MainTvShow";
import Footer from "../components/Footer";

const TvShowsPage = () => {
  return (
    <>
      <MainTvShow />
      <TvShowsRow
        title="Top Rated"
        fetchURL={tvShowsRequests.requestTopRated}
        rowID={nanoid()}
      />
      <TvShowsRow
        title="Popular"
        fetchURL={tvShowsRequests.requestPopular}
        rowID={nanoid()}
      />
      <TvShowsRow
        title="Airing"
        fetchURL={tvShowsRequests.requestAiring}
        rowID={nanoid()}
      />
      <TvShowsRow
        title="On the Air"
        fetchURL={tvShowsRequests.requestOnTheAir}
        rowID={nanoid()}
      />
      <Footer/>
    </>
  );
};

export default TvShowsPage;
