import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/movie-matchmaker-logo.png'
import Footer from '../../components/Footer/Footer'
import { login, signup } from '../../firebase'
import spinner from '../../assets/loading-spiral.png'

function Login() {

const [signState, setSignState] = useState("Sign In");
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [loading, setLoading] = useState(false);

const user_auth = async (event)=>{
  event.preventDefault();
  setLoading(true);
  if(signState==="Sign In"){
    await login(email, password);
  }else{
    await signup(name, email, password);
  }
  setLoading(false);
}

  return (
    loading? <div className="login-spinner">
              <img src={spinner} alt="" className="spinner" />
             </div>:
        
        <div>
      <div className="login-container">
        <div className="login-logo-wrapper">
          <img src={logo} alt="" className="login-logo" />
        </div>

        <div className="login-form">
          <h1>{signState}</h1>
          <div className="login-fields-container">
          <form>
            {signState==="Sign Up"?
            <input value={name} onChange={(e)=>{setName(e.target.value)}} type="text" placeholder='Your Name' />:<></>}
            <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder='email@example.com' />
            <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder='Password' />
            <div className="btn-container">
            <button onClick={user_auth} type='submit' className="register-btn">{signState}</button>
          </div>  
          </form>

            <div className="form-switch">
              {signState==="Sign In"? <p>New to Matchmaking? <span onClick={()=>{setSignState("Sign Up")}}>Register Now</span></p>:
              <p>Already have an account? <span onClick={()=>{setSignState("Sign In")}}>Sign In</span></p>}
            </div>  
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Login

