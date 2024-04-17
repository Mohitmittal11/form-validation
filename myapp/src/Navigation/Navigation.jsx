import React from 'react'
import { Routes,Route } from 'react-router-dom';
import Signup from '../component copy User/Signup';
import Game from '../component copy User/Game'
import Signin from '../component copy User/Signin'
import Dashboard from '../component copy User/Dashboard'


const Navigation = () => {
  return (
    <div>
    <Routes>
    <Route path='/' element={<Game/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/dashboard' element={<Dashboard/>}/>
    <Route path='/signin' element={<Signin/>}/>
    
    </Routes>
      
    </div>
  )
}

export default Navigation
