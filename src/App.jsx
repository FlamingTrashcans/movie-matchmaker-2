import React from 'react'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Information from './pages/Information/Information'
import SearchResults from './pages/SearchResults/SearchResults'

const App = () => {
  return (
    <div>
      <Home/>
      <Login/>
      <Information/>
      <SearchResults/>
    </div>
  )
}

export default App
