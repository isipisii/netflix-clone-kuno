import requests from '../Requests'
import Main from '../components/Main'
import Row from '../components/Row'


const Home = () => {
  return (
    <>
      <Main />
      <Row 
        title="Trending"
        fetchURL={requests.requestTrending}
        rowID="1"
      />
      <Row 
        title="Upcoming"
        fetchURL={requests.requestUpcoming}
        rowID="2"
      />
      <Row 
        title="Popular"
        fetchURL={requests.requestPopular}
        rowID="3"
      />
      <Row 
        title="Now Playing"
        fetchURL={requests.requestHorror}
        rowID="4"
      />
    </>
  )
}

export default Home