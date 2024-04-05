import Navbar from "./components/Navigation"
import AboutComponent from "./components/about_us"
import DummyList from "./components/dummylist"
import FoodList from "./components/foodCom"
import Otp from "./components/otp"
export default function App(){
  return(
    <>
    <Navbar/>
    <DummyList/>
    <AboutComponent/>
    <FoodList/>
    <Otp/>
    </>
  )
}