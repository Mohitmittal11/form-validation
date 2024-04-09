
// import Usecallback from './Usecallback';
// import Usemomo from './component/Usemomo';
import { Routes,Route } from 'react-router-dom';
import Game from './component copy User/Game';
import { createContext, useState } from 'react';
import Signup from './/component copy User/Signup';
import Signin from './/component copy User/Signin';
// import Parentcompnent from './childtoparent/Parentcompnent';

const newcontext= createContext();


const App=() => {
  return (
  
    <div className="App">
  
    <Routes>

    <Route path='/' element={<Game/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/signin' element={<Signin/>}/>
    </Routes>

  //  
    </div>
  
   
  );
}

export default App;
export {newcontext};
