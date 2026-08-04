import React, { useEffect, useRef } from 'react'
import { useState } from 'react'

const App = () => {
  const [count, setCount] =  useState(0);
  let val = useRef(0);

  function handleIncrement () {
    val.current = val.current + 1;
    console.log("value of val: ", val);
    setCount(count +1); 
  }

 useEffect(() => {
console.log("render done")
 })

  return (
    <div>
    <button onClick={handleIncrement}>
    Increment

    </button>
    <br/>

    
    <div>
      count: {count}
    </div>
    </div>
  )
}

export default App
