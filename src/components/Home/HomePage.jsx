import Review from "../Root/Review";
import AboutProduct from "./AboutProduct"
import Intro from "./Intro"
import ProductReviews from "./ProductReviews"
import ShopandMission from "./ShopandMission"
import VisitShop from "./VisitShop";


const HomePage = () => {
  return (
    // <div className="max-lg:w-[90%] max-lg:mx-auto">
      <div>
      <Intro/>
      <AboutProduct/>
      <Review/>
      <ShopandMission/>
      <VisitShop/>
      <ProductReviews/>
    </div>
  )
}

export default HomePage
