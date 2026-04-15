import React from 'react'
import './Filter.css'

const Filter = () => {
  return (
    <div className="filter__wrapper">
                            <select name="" id="filter" className="filter">
                                <option value="">Apply Filters</option>
                                <option value="az">Sort A-Z</option>
                                <option value="za">Sort Z-A</option>
                                <option value="new">Newest to Oldest</option>
                                <option value="old">Oldest to Newest</option>
                            </select>
                        </div> 
  )
}

export default Filter
