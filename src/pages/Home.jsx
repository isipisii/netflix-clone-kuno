import { requests } from "../Requests";
import { nanoid } from "nanoid";

import MainMovie from "../components/MainMovie";
import Row from "../components/Row";

const Home = () => {
  return (
    <>
      <MainMovie />
      <Row
        title="Trending"
        fetchURL={requests.requestTrending}
        rowID={nanoid()}
      />
      <Row
        title="Upcoming"
        fetchURL={requests.requestUpcoming}
        rowID={nanoid()}
      />
      <Row
        title="Popular"
        fetchURL={requests.requestPopular}
        rowID={nanoid()}
      />
      <Row
        title="Top Rated"
        fetchURL={requests.requestTopRated}
        rowID={nanoid()}
      />
    </>
  );
};

export default Home;
