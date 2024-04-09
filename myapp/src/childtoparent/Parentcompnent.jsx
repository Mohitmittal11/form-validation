import React, { createContext } from 'react'
import Childcomponent1 from './Childcomponent1'

const context=createContext();
const Parentcompnent = () => {
    const data1="This is in the parent component";

  return (  
    <div>
    <context.Provider value={data1}>
      <Childcomponent1/>
      </context.Provider>
    </div>
  )
}

export default Parentcompnent;
export {context}
