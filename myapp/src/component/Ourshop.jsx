import {  Outlet } from 'react-router-dom'
import './ourshops.css';
const Ourshop = () => {
  const myFunction=()=> {
    
    
    let values=document.getElementById("fname").value;
    console.log(values);
    localStorage.setItem("firstname",values);
    let data=localStorage.getItem("firstname");
    console.log(data);
    
  }
  return (
    <div className='item'>
      <h1> This is Our Shop Page</h1>
      <label id="firstname" for="fname">First Name: </label>
      <input type='text' id='fname'/>
      <label for="lname">Last Name: </label>
      <input type='text' id='lname'/>
      <button onClick={myFunction}>Submit</button>
      <Outlet/>
  
    </div>
  
  )
}

export default Ourshop;
