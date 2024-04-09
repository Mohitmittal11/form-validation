import React from 'react'

const Usable = () => {
    let name="Mohit Mittal1234";
  return (
    <div>
      <Newcompo data={name}/>
    </div>
  )
};

export default Usable;

const Newcompo = (props)=> {
    let value=props.data;
 
    return (
        <>
      
        <p>The value of Data is: {props.data}</p>
        <Anothercompo child={value}/>
        <p>This is a paragraph</p>
        </>
    )
}

const Anothercompo= (props)=> {
    return (
     <h3>This is Another Component and its value is:{props.child}</h3>
    )

}

