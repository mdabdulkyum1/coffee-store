import PopularProducts from "../../components/PopularProducts/PopularProducts";
import Banner from "../../components/shared/Banner/Banner"
import FeaturesCoffee from "../../components/shared/FeaturesCoffee/FeaturesCoffee"
import FollowUs from './../../components/shared/FollowUs/FollowUs';

function Home() {
  return (
    
    <>
      <Banner></Banner>
      <FeaturesCoffee></FeaturesCoffee>
      <PopularProducts></PopularProducts>
      <FollowUs></FollowUs>
    </>
  )
}

export default Home