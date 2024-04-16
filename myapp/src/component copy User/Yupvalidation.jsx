import React from 'react'
import '../styles/signup.css';
const Yupvalidation = () => {
  return (
    <div className='signUpMainContaier'>
    <div className='main-container'>
      <div className='left-container'>

        <div className='signin-card'>
          <form>
            <input type='text'  id='name' placeholder='Username' name='name' />

            <input type='text' id='mail' placeholder='Email' name='email'  />
            <input type='text' name='contact' placeholder='Contact No.'/>
                         
            <div className='showinput'>
            <input type='password'  id='pass' name='password' placeholder='password'/>
            <button className='showbutton'>Show</button>
            </div>
            <div className='showinput'>
            <input className='showinput' type='password' id='confirmpass' name='confirmpass' placeholder='Confirm password'/>
            <button className='showbutton'>Show </button>
            </div>

            <button id='btn'>Sign</button>
          </form>
          <p>Already have an account?<span>Sign in here</span></p>
        </div>
      </div>
      <div className='right-container'>
        <h1>Join With Us</h1>
      </div>
    </div>
  </div>
  )
}

export default Yupvalidation;
