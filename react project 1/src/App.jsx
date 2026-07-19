

import UserCard from './components/UserCard'


function App() {
  return (
    <div className='container'>

      <UserCard name="sumit sharma" desc = "desc1"/>
        <UserCard name="ronaldo" desc="desc2"/>
          <UserCard name="virat" desc="desc3"/>
    </div>
  )
}


export default App

