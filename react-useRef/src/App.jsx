import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import "./App.css"

const App = () => {
//   const [count, setCount] =  useState(0);
//   let val = useRef(0);


//   let btnRef = useRef();
//   function handleIncrement () {
//     val.current = val.current + 1;
//     console.log("value of val: ", val);
//     setCount(count +1); 
//   }

//  useEffect(() => {
// console.log("render done")
//  })

//  function changeColor() {
//    btnRef.current.style.backgroundColor = "red";
//  }

const [time, setTime] = useState(0);
let timerRef = useRef(null);

function startTimer(){
timerRef.current  = setInterval (() => {
  setTime(time => time+1)
}, 1000);
}

function stopTimer(){
 clearInterval(timerRef.current);
 timerRef.current = null;
}

function resetTimer(){
  stopTimer();
  setTime(0);
}


  return (
    <div>
    <h1>
      StopWatch: {time} seconds
    </h1>
    <button onClick={startTimer}>
      Start
    </button>
    <br/>

    <button  onClick={stopTimer}>
      Stop
    </button>
    <br/>

    <button onClick={resetTimer}>
      Reset
    </button>
    {/* <button
    ref={btnRef}
     onClick={handleIncrement}>
    Increment

    </button>
    <br/>

     <button onClick={changeColor}>
      Change color 1st button
     </button>
     <br/>
    <div>
      count: {count}
    </div> */}
    </div>
  )
}

export default App
