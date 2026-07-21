import { useState } from 'react';
import Card from './components/card'
function App() {

     {/* create state
    manage state
    change state
    sabhi state mein child ko sync karwadunga */}

    const [name, setName] = useState('');
      

        return (
    <div>

   <Card title="Card1" name={name} setName= {setName} />
    <Card title="Card2" name={name} setName= {setName} />
   {/* <p>I am inside parent component and value of name is {name}</p> */}
    </div>
  )
}

export default App
