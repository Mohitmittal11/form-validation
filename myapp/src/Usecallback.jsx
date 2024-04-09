import React, { useCallback, useState } from 'react'
import Child from './Child';

const Usecallback = () => {
    const [integer,setInteger]=useState(0);
    const [integertwo, setintegerTwo]=useState(1);
    const increment=()=>{
        setInteger(integer+1);
        setintegerTwo(integertwo+1);
    }
    
    // const  setfunc= useCallback(()=> {
    //     const newfunc= ()=> {
    //         return(
    //             console.log("This is inner function")
    //         );
    //     }
    // },[integertwo])

  return (
    <>
    <Child currentvalue={integertwo} setfunc />
  <button onClick={increment}>Add</button>
  <p>{integer}</p>
 </>
  )
}

export default Usecallback;
