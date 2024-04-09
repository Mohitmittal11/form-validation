import React,{memo} from 'react'

const Child = ({integertwo,setintegerTwo}) => {
    return (
        console.log("This is child component")
       );
}

export default memo(Child);
