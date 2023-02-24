import React, { useEffect,useState } from 'react'

const UseeffectEx = () => {
const [data,setData]=useState(10)
const [count,setCount]=useState(100)


    useEffect(()=>{
        console.log("called with data state")
    },[data])
    useEffect(()=>{
        console.log("count is "+count)
    },[count])
  return (
    <>
      <h1>Data : {count}</h1>
   <h1>Count : {data}</h1> 

    <button onClick={()=>setCount(count+1)}>Update Count</button>
    <button onClick={()=>setData(data+1)}>Update Data</button>

   
    </>
  )
}

export default UseeffectEx