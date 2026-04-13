import React from 'react'
import Footer from '../../components/Footer/Footer'
import MovieCards from '../../components/MovieCards/MovieCards'
import Navbar from '../../components/Navbar/Navbar'

const Home = () => {
  return (
    <>
        <Navbar/>
        <div class="landing__page--wrapper--find">
                <div class="searchbar__and__stuff--find">
                    <h1 class="searchbar__title--find">Texas' most awarded movie finder</h1>
                    <h2 class="searchbar__subtitle--find">MAKE TONIGHT YOUR MOVIE NIGHT</h2>
                    <div class="searchbar--wrapper--find">
                        <form action="" class="searchbar--find">
                            <div class="btn__and__form--find">
                                <input type="text" id="search__input" placeholder="Find a movie..."/>
                                <button type="submit" class="search__btn--find">Match Now</button>
                            </div>
                        </form>
                        <div class="filter__wrapper">
                            <select name="" id="filter" class="filter">
                                <option value="">Apply Filters</option>
                                <option value="az">Sort A-Z</option>
                                <option value="za">Sort Z-A</option>
                                <option value="new">Newest to Oldest</option>
                                <option value="old">Oldest to Newest</option>
                            </select>
                        </div>    
                    </div> 
                </div>
        </div>
        <Footer/>
    </>
  )
}

export default Home
