import Booking from "./pages/Booking";
import AddItem from "./components/AddItem";
import Navbar from "./components/Navigation";
import Home from "./pages/Ehome";
import { Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
// import Food from './pages/Food';

export default function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<Signup />} /> */}
      <Route path="/Home" element={<Home />} />
      {/* <Route path='/Food' element={<Food/>}/> */}
      <Route path="/Booking" element={<Booking />} />
    </Routes>
  );
}
