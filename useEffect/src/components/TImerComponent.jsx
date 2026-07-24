import React, { useState, useEffect}from 'react'

function TimerComponent() {
    const [seconds, setSeconds] = useState(0);

    useEffect (() => {
        const intervalid = setInterval (() => {
            console.log("setInterval executed");
            setSeconds (prevSeconds => prevSeconds + 1);
        }, 1000);

        return () => {
            console.log("time to stop")
            clearInterval ( intervalid );
        };
    },[]);
  return (
    <div>
      <h1>seconds: {seconds}</h1>
    </div>
  )
}

export default TimerComponent
