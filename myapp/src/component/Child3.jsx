import React, { useContext } from 'react'
import { data } from './Parent';
const Child3 = () => {

    let num= useContext(data);
    num="VK";
    console.log("The value of num is:",num);

  return (
    <div>
   <h1> My name is {num}</h1>
    </div>
  )
}
export default Child3;
