import React from 'react'
import movie_reel from '../../assets/Movie-reel.svg.png'
import './Cart.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Cart = () => {

  const navigate= useNavigate();

  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
  const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
  setCartItems(storedCart);
  }, []);

  function removeItem(id) {
    const updated = cartItems.filter(item => item.imdbID !== id);
    setCartItems(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  }

  return (
    <div>
    <div className="page-container">
    <Navbar/>
    <div className="back-wrapper">
        <button className="back-to-search" onClick={() => {
          navigate(-1);
          }} >
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
          cartItems.map((item) => (
            <div className="item-container" key={item.imdbID}>
              <div className="item_img-container">
                <img 
                  src={item.Poster !== "N/A" ? item.Poster : movie_reel} 
                  alt={item.Title} 
                  className="item_img" 
                />
              </div>
              <div className="item_info-container">
                <p className="item_title">{item.Title}</p>
                <button className="remove" onClick={() => removeItem(item.imdbID)}>
                  Remove
                </button>
              </div>
            </div>
          ))
        )}

        <hr className="divider" />
      </section>
      <section className="price">
        <div className="price-text">
        <h1>Your Total</h1>
        <p className="total">$99.99</p>
        </div>
        <div className="button-wrapper">
            <button className="checkout" onClick={() => alert('This function does not work, thank you for viewing!')}>Checkout</button>  
        </div>
      </section>
    </div>  
    <Footer/>
    </div>
  )
}

export default Cart