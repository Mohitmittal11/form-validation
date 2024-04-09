import React, { useContext } from 'react'
import { newcontext } from '../App';
import ProductDetails from '../component/ProductDetails';
const Childone = () => {

  let data=useContext(newcontext);
 

  const myFunction=(e)=>
    {
      e.preventDefault();
      var namevalue=document.getElementById('name').value;
       data.currentName=namevalue;
       data.setCurrentName(data.currentName);
    }
   
  return (
    <div>
    
    <form>
    <input type='text' id='name' placeholder='Product name'/>
    <button onClick={myFunction}>Send name</button>
    </form>
    <ProductDetails/>
    </div>
  )
}

export default Childone;

