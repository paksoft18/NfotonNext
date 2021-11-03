import Hero from '../screens/home/Hero'
import Selection from '../screens/home/Selection'
import Popular from '../screens/home/Popular'
import HotBid from '../components/HotBid'
import Collections from '../screens/home/Collections'
import Discover from '../screens/home/Discover'
import Description from '../screens/home/Description'

const Home = () => {
  return (
    <>
      <Hero />
      <Selection />
      <Popular />
      <HotBid classSection="section" />
      <Collections />
      <Discover />
      <Description />
    </>
  )
}

export default Home
