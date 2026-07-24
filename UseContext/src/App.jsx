import React, { createContext, useState } from 'react'
import ChildA from './components/ChildA';


const UserContext = createContext();

function App() {
  const [user , setUser] = useState({name:"sumit"})
  return (
  <>
  <UserContext.Provider value={user}>
     <ChildA/>
  </UserContext.Provider>
   
  </>
  )
}

export default App
export {UserContext}
