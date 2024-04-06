import Profile from "./pages/Profile";
import Home from "./pages/Home"
import {Routes, Route} from 'react-router-dom';
import Signup from './pages/Signup';
import About from './components/about_us';
import Booking from './pages/Booking';
import Food from './pages/Food';


export default function App(){
  return(
    
    <Routes>
    
      <Route path='/' element={<Signup/>}/>
       <Route path='/Booking' element={<Booking/>}/>
      <Route path='/Home' element={<Home/>}/>
      {/* <Route path='/Food' element={<Food/>}/> */}
      <Route path='/Food' element={<Food/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Booking' element={<Booking/>}/>
      <Route path="/Profile" element={<Profile/>}/>
    </Routes>
  )
}
