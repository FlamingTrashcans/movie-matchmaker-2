import React from 'react'
import { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Information from './pages/Information/Information'
import SearchResults from './pages/SearchResults/SearchResults'
import Cart from './pages/Cart/Cart'
import { onAuthStateChanged, getAuth } from 'firebase/auth'

const App = () => {
  
  const auth = getAuth()
  const navigate = useNavigate();

  useEffect(()=>{
    onAuthStateChanged(auth, async (user)=>{
      if(user){
        console.log("Logged In");
        navigate('/');
      }else{
        console.log("Logged Out");
        navigate('/login');
      }
    })
  },[])
  
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path="/Information/:id" element={<Information />} />
        <Route path='/SearchResults' element={<SearchResults/>}></Route>
        <Route path='/Cart' element={<Cart/>}></Route>
      </Routes>
    </div>
  )
}

export default App
