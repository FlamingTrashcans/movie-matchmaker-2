import React from 'react'
import './Login.css'
import logo from '../../assets/movie-matchmaker-logo.png'

const Login = () => {
  return (
    <div>
      <div className="login-container">
        <div className="login-logo-wrapper">
          <img src={logo} alt="" className="login-logo" />
        </div>
        <div className="login-forms">
          <form action="">
            <input type="text" />
            <input type="text" />
            <input type="text" />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login

