import React from 'react'
import ChildC from './ChildC'
const ChildB = (props) => {
  return (
    <>
     <div>Child B</div>
     <ChildC name={props.name}/>
    </>
   
  )
}

export default ChildB