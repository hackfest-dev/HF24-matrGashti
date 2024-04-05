import Navbar from "./components/Navigation"
import AboutComponent from "./components/about_us"
import DummyList from "./components/dummylist"
import FoodList from "./components/foodCom"
import Footer from "./components/Footer"
import Otp from "./components/otp"
import Order from "./components/Order"
export default function App(){
  return(
    <>
    <Navbar/>
    <Order/>
    <DummyList/>
    <AboutComponent/>
    <FoodList/>
    <Otp/>
    <Footer/>
    </>
  )
}