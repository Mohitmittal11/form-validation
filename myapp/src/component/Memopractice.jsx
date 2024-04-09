import React,{memo, useState} from 'react'
import Child from '../Child';

const Memopractice = () => {
  const [current, setCurrent]=useState(1);
  const increment =()=> {
    setCurrent(current+1);
  }
  return (
  
    <div>
      <Child />
      <button onClick={increment}>ADD</button>
      <p>{current}</p>
    </div>
  )
}
const Newchild=memo(()=> {
  return (
    console.log("This is Newchild function")
  );
 }
)
export default Memopractice;
