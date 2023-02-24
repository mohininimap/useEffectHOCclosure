import React from 'react'
import ChildB from './ChildB'
const ChildA = (props) => {
  return (
    <>
    <h2>CHild A</h2>
    <ChildB name={props.name}/>
    </>
  )
}

export default ChildA