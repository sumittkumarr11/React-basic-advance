import React , { useEffect, useState } from 'react'

function MultiEffectComponent() {
    const [count , setCount] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect ( () => {
        console.log("count changed:" , count);
    },[count]);

    useEffect(()=>{
        const intervalid = setInterval(() => {
            setSeconds (prevSeconds=> prevSeconds+1);
        },1000);

        return() => clearInterval(intervalid);
    },[]);

  return (
    <div>
      <h1>count: {count}</h1>
      <button onClick={() => setCount(count+1)}>Increment count </button>
      <h2>seconds:{seconds}</h2>
    </div>
  )
}

export default MultiEffectComponent
