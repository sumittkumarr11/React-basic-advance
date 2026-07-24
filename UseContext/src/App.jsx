import React, { createContext, useState } from 'react'
import ChildA from './components/ChildA';
import './App.css'


// const UserContext = createContext();
const ThemeContext = createContext();
function App() {
  const [theme , setTheme] = useState('light')
  // const [user , setUser] = useState({name:"sumit"})
  return (
 
  <>
<ThemeContext.Provider value = {{theme,setTheme}}>
<div id ='container' style={{backgroundColor:theme==='light'?"beige":"black"}}>
<ChildA/>
</div>
</ThemeContext.Provider>
  {/* <UserContext.Provider value={user}>
     <ChildA/>
  </UserContext.Provider> */}
   
  </>
  )
}

export default App
// export {UserContext}
export {ThemeContext}