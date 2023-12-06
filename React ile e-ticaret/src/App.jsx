import { Route, Routes } from 'react-router-dom'
import './App.css'

import Footer from './dizayn/Footer'
import Navbar from './dizayn/Navbar'
import Home from './Components/home'
import CardsItems from './Components/CardsItems'
import  Card  from './Components/Card'
import Payments from './Components/Payments'
import Login from './Components/Login'
import Register from './Components/Register'
import Profile from './Components/Profile'
function App() {


  return (
    <>
    <Navbar/>
 <Routes>

 <Route path='/' element={<Home/>} />
 <Route path='/Card' element={<Card/>}/>
 <Route path='/Kolonya' element={<CardsItems/>}/>
 <Route path='/Payment' element={<Payments/>}/>
 <Route path='/Login' element={<Login/>}/>
 <Route path='/Register' element={<Register/>}/>
 <Route path='/profile' element={<Profile/>}/>
 </Routes>


<Footer/>
    </>
  )
}

export default App
