import React from 'react'
import './Searchbar.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SearchBar = ({ onSearch }) => {

const [input, setInput] = useState("");

function handleSubmit(e) {
  e.preventDefault()
  if (input.trim() !== "") {
    onSearch(input)
  }
}

  return (
    <div>
      <form action="" className="searchbar--find" onSubmit={handleSubmit}>
          <div className="btn__and__form--find">
              <input type="text" className='search__input' placeholder="Find a movie..." value={input} onChange={(e) => setInput(e.target.value)}/>
              <button type="submit" className="search__btn--find">Match Now</button>
          </div>
      </form> 
    </div>
  )
}

export default SearchBar