import React from 'react'
import './App.css'
import { useEffect, useState } from 'react'
function App() {
// const [count , setCount] = useState(0);
// const [total , setTotal] =  useState(1);
// useEffect (() => {
//   alert ("i will run on each render")
// })

// useEffect (() =>{
//   alert ("i will run on only 1st render")
// }, [])


// useEffect (() => {
// alert ("i will run every time when count is updated ")
// }, [count] )


// useEffect(() => {
//  alert ("i will run every time when count/total is updated ")
// },[count , total ])


// useEffect(()=>{
//   alert ("count is updated ")

//   return ()=> {
//     alert ("count is unmounted from ui");
//   }
// }, [count])

 
// function handleClick(){
//   setCount (count+1);
// }
// function handleClickTotal(){
//     setTotal (total+1);
// }
  return (
    <div>
    {/* <button onClick={handleClick}>
   update count
    </button>
    <br/>
    count is : {count}
    <br/>
     <button onClick={handleClickTotal}>
   update total
    </button>
    <br/>
    total is : {total} */}
    </div>
  )
}
export default App
