<<<<<<< HEAD
import Booking from "./pages/Booking"
import AddItem from "./components/AddItem"
import Navbar from "./components/Navigation"
import Home from "./pages/Ehome"
import {Routes, Route} from 'react-router-dom';
import Signup from './pages/Signup';
// import Food from './pages/Food';

export default function App(){
  return(
    <Routes>
      <Route path='/' element={<Signup/>}/>
      <Route path='/Home' element={<Home/>}/>
      {/* <Route path='/Food' element={<Food/>}/> */}
      <Route path='/Booking' element={<Booking/>}/>
    </Routes>
=======
import Update from "./components/UpdateProfile"
import Signup from "./pages/Signup"
export default function App(){
  return(
    <div>
      {/* <Update/> */}
      <Signup/>
      
    </div>
>>>>>>> cfabb5112d78f784be7dba5a373407d5df066883
  )
}