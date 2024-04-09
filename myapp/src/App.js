
// import Usecallback from './Usecallback';
// import Usemomo from './component/Usemomo';
import { Routes,Route } from 'react-router-dom';
import Home from './component/Home';
import Ourshop from './component/Ourshop';
import ProductDetails from './component/ProductDetails';
import Contact from './component/Contact';
import Navbar from './component/Navbar';
import Address from './component/Address';
import Usable from './component/Usable';
import Parent from './component/Parent';
import Parent1 from './component2/Parent1';
import Childone from './component2/Childone';
import Game from './component copy User/Game';
import { createContext, useState } from 'react';
import Signup from './/component copy User/Signup';
import Signin from './/component copy User/Signin';
// import Parentcompnent from './childtoparent/Parentcompnent';

const newcontext= createContext();


const App=() => {
  const [currentName, setCurrentName]=useState('');
  return (
  
    <div className="App">
  
    <Routes>

    <Route path='/' element={<Game/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/signin' element={<Signin/>}/>
    </Routes>

   <newcontext.Provider value={{currentName,setCurrentName}}>
    <Childone />
    </newcontext.Provider>
    <Navbar/>
    <Routes>
   <Route path='/' element={<Home/>}/>
   <Route path='/ourshop' element={<Ourshop/>}/>
   <Route path='address' element={<Address/>}/>
  
   <Route path='/product' element={<ProductDetails/>}/>
   <Route path='/contact' element={<Contact/>}/>
    </Routes>
    <Usable/>
    <Parent/>

    <Parent1/>
    </div>
  
   
  );
}

export default App;
export {newcontext};
