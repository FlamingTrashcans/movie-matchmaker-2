import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
      <div className="footer__container">
              <div className="footer__social--links">
                  <Link to={'/'} className="footer__social--link">Home</Link>
                  <a href="https://www.facebook.com/" className="footer__social--link">Facebook</a>
                  <a href="https://x.com/" className="footer__social--link">X</a>                
              </div>
        </div>     
    )
}

export default Footer
