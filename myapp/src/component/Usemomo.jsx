import React, { useMemo, useState } from 'react'

const Usemomo = () => {
    const [current, setCurrent]=useState([]);
    const [value, setValue]=useState(1);

 
 const increment2 =()=> {
    setValue(value+1);
 } 
const isEven = useMemo(allevenNum,[value]) ;
function allevenNum() {
  if(value<100 && value%2===0)
  {
    setCurrent(current.push(value));
  }
  console.log(current);
}

  return (
   <>
  
   <button onClick={increment2}>addvalue -{value}</button>

   <p>without useMemo: {!isEven? "odd":"even"}</p>
   </>
   
  );
  }



export default Usemomo;
