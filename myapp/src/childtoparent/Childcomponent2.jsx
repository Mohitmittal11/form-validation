import React, { useContext } from 'react'
import { context } from './Parentcompnent';

const Childcomponent2 = () => {
    const useit= useContext(context);
  return (
    <div>
      <h1>Hello {useit}</h1>
    </div>
  )
}

export default Childcomponent2
