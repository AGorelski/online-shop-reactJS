import Carousel from "./components/carousel/Carousel"
import CategoriesStart from "./components/categories/CategoriesStart"
import FeaturedStart from "./components/featured/FeaturedStart"
import Footer from "./components/footer/Footer"
import NavBar from "./components/navbar/NavBar"
import Offer from "./components/offer/Offer"
import ProductsStart from "./components/products/ProductsStart"
import Topbar from "./components/topbar/Topbar"

function App() {

  return (
    <>
      <Topbar />
      <NavBar />
      <Carousel />
      <FeaturedStart />
      <CategoriesStart />
      <ProductsStart />
      <Offer />
      <Footer />
    </>
  )
}

export default App
