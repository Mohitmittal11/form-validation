import React, { createContext } from 'react'
import Child1 from './Child1';


const data= createContext();
const Parent = () => {
    const name= "Rohit Sharma";
        
  return (
    <>
    <data.Provider value={name}>
      <Child1 />
      </data.Provider>
    </>
  );
}

export default Parent;
export {data};
