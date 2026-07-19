
import ronaldopic from "../assets/ronaldooo.jpg"
import './UserCard.css'
const  UserCard =(props) => {
  return (
    <div className='user-container'>
      <p id='user-name'>{props.name}</p>
      <img id ="user-img" src={ronaldopic} alt="sumit"></img>
      <p id='user-desc'>{props.desc}</p>
    </div>
  )
}

export default UserCard
 