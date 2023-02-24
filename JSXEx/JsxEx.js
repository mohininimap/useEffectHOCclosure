import React from 'react'
import logo from "./logo1.png"
const JsxEx = () => {
  return (
<>
<h2>JSX Example</h2>
<img src={logo}/>
<input value="Please enter name"/>
</>

  )
}

export default JsxEx

{/* JSX->Inside return code within single wrapper
tag must be closed  for example img,input tag */}