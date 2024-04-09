import React, { useContext } from 'react'
import Child3 from './Child3'
import {data} from './Parent';

const Child2 = () => {
    const datas= useContext(data);
  return (
    <div>
      <h3>This is inside the Child2 and name is: {datas}</h3>
      <Child3/>
    </div>
  )
}

export default Child2;
