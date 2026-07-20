import React, { useState } from 'react'


import Button from './components/button';

function App() {
  const [count , setCount] = useState(0);


  function handleClick(){
    setCount(count+1);
  }

  return (
    <div>

<Button handleClick ={handleClick} text="click me" />
<h1>{count}</h1>

      {/* <Card name ="sumit sharma">
<h1>best athlete</h1>
<p>try to be consistent</p>
<p>will millionare soon</p>
      </Card> */}
    </div>
  )
}

export default App
