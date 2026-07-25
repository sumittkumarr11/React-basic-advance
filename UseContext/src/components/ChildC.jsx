import React, { useContext } from 'react'
import { ThemeContext } from '../App'
const ChildC = () => {
    const user = useContext (UserContext);
    const {theme , setTheme} = useContext (ThemeContext);
    function toggle(){
         if (theme === 'light')
            setTheme ('dark')
        else
            setTheme('light')
    }
  return (
    <div>

    <button onClick={toggle}>
        change theme
    </button>


       {user.name}
    </div>
  )
}

export default ChildC
