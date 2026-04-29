import React from 'react'
import { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Information from './pages/Information/Information'
import SearchResults from './pages/SearchResults/SearchResults'
import Cart from './pages/Cart/Cart'

const App = () => {

const navigate = useNavigate();

useEffect(() => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const path = window.location.pathname.toLowerCase();

  if (!isLoggedIn && path !== "/login") {
    navigate("/login", { replace: true });
  }

  if (isLoggedIn && path === "/login") {
    navigate("/", { replace: true });
  }
}, []);
  
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path="/Information/:id" element={<Information />} />
        <Route path='/SearchResults' element={<SearchResults/>}></Route>
        <Route path='/Cart' element={<Cart />}></Route>
      </Routes>
    </div>
  )
}

export default App
