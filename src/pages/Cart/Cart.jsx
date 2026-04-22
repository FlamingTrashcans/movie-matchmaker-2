import React from 'react'
import movie_reel from '../../assets/Movie-reel.svg.png'
import './Cart.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { Link } from 'react-router-dom'
import { useNavigate, useLocation } from 'react-router-dom'
import { useState } from 'react'

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate= useNavigate();
  const location = useLocation();

  return (
    <div>
    <Navbar/>
    <div className="back-wrapper">
        <button className="back-to-search" onClick={() => {
              if (location.state?.from) {
                navigate(location.state.from);
              } else {
                navigate("/SearchResults");
              }}} >
          Back to Search
        </button>
    </div>    
      <section className="cart-items">
        <h1>Items in your Cart</h1>
        
        {cartItems.length === 0 ? (
          <div className="empty-cart-container">
              <p className="empty-cart-text">Nothing in Your Cart</p>
          </div>  
        ) : (

        <div className="item-container">
            <div className="item_img-container">
                <img src={movie_reel} alt="" className="item_img" />
            </div>
            <div className="item_info-container">
                <p className="item_title">Title</p>
                <p className="item_price">$No Prices in API</p>
                <input type="number" className="item_quantity" min={0} max={99}/>
            </div>    
        </div>
      )}

        <hr className="divider" />
      </section>
      <section className="price">
        <div className="price-text">
        <h1>Your Total</h1>
        <p className="total">$API does not include prices</p>
        </div>
        <div className="button-wrapper">
            <button className="checkout" onClick={() => alert('This function does not work, thank you for viewing!')}>Checkout</button>  
        </div>
      </section>
    <Footer/>
    </div>
  )
}

export default Cart