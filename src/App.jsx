import React from 'react'
import { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Home from './pages/Home/Home'
import Information from './pages/Information/Information'
import SearchResults from './pages/SearchResults/SearchResults'
import Cart from './pages/Cart/Cart'

const App = () => {

const navigate = useNavigate();
  
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path="/Information/:id" element={<Information />} />
        <Route path='/SearchResults' element={<SearchResults/>}></Route>
        <Route path='/Cart' element={<Cart />}></Route>
      </Routes>
    </div>
  )
}

export default App
