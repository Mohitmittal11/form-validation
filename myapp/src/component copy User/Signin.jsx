import React from 'react'
import '../styles/login.css'
import { Link } from 'react-router-dom'

const Signin = () => {

  return (
    <div>
    <div className='maincontainer'>
    
    <div className='leftcontainer'>
       <h1>Welcome</h1>
    </div>
    <div className='right-container'>
    <div className='right-card'>
    <input type='text' id='name' placeholder='Username'/>
    <input type='password' id='pass' placeholder='Password'/>
    <button>Sign In</button>
    <p className='forgot'>Forgot password?</p>
    <p className='account'>Don't have an account?<Link to={'/signup'}><span>Sign Up here</span></Link></p> 
    </div>
    </div>
    </div>
    </div>
  )
}

export default Signin
