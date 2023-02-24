import React,{useState} from "react"
const ParentCompo=()=>{
  return(
    <>
  <h1>HOC</h1>
  <HOCRed cmp={Counter}/>
  <HOCGreen cmp={Counter}/>
  <HOCBlue cmp={Counter}/>

    </>
  )

}
const HOCRed=(props)=>{
  return <h2 style={{backgroundColor:'red',width:100}}>Red<props.cmp/></h2>
}

const HOCGreen=(props)=>{
  return <h2 style={{backgroundColor:'green',width:100}}>Green<props.cmp/></h2>
}

const HOCBlue=(props)=>{
  return <h2 style={{backgroundColor:'blue',width:100}}>Blue<props.cmp/></h2>
}
function Counter()
{
    const [count,setCount]=useState(0)
return(
    <>
     <h2>Count : {count}</h2>
     <button onClick={()=>setCount(count+1)}>Update Count</button>
    </>
   
)
}

export default ParentCompo;